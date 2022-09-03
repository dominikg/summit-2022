import { getHighlighter } from 'shiki';
import { getTheme, loadTheme } from 'shiki-themes';

const escapeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '{': '&#123;',
    '}': '&#125;',
};

const escapeRE = new RegExp(`[${Object.keys(escapeChars).join('')}]`, 'g');

function escape(str) {
    if (str && str.length !== 0) {
        return str.replace(escapeRE, (c) => escapeChars[c]);
    }
    return '';
}

function render(lines, options) {
    const { fg, bg } = options;
    const lineNumbers = options.showLineNumbers(lines.length, options.lang);
    const lang = options.lang ? `<span class="code-language">${options.lang}</span>` : '';
    return `<pre class="code-highlight" style="color: ${fg}; background-color: ${bg}">${lang}<code class="${
        lineNumbers ? 'numbered' : 'simple'
    }">${lines.map(lineRenderer(options)).join('\n')}\n</code></pre>`;
}

const lineRenderer = (options) => (line) => {
    const output = line.map(tokenRenderer(options)).join('');
    const { leadingWS, content, trailingWS } = splitLeadingAndTrailingWS(output);
    return `${leadingWS || ''}<span class="line-of-code">${content || ''}</span>${trailingWS || ''}`;
};

const tokenRenderer = (options) => (token) => {
    if (!token.color || token.color.toLowerCase() === options.fg) {
        return escape(token.content);
    }
    const { leadingWS, content, trailingWS } = splitLeadingAndTrailingWS(token.content);
    if (!content) {
        return leadingWS;
    }

    return `${leadingWS}<span style="color: ${token.color}">${escape(content)}</span>${trailingWS}`;
};

function splitLeadingAndTrailingWS(content) {
    const len = content.length;
    let start = 0;
    let end = len;

    while (start < end && isWS(content.charAt(start))) {
        start++;
    }

    if (start === end) {
        return {
            leadingWS: content || '',
        };
    }

    while (end > start && isWS(content.charAt(end - 1))) {
        end--;
    }

    return {
        leadingWS: content.slice(0, start),
        content: content.slice(start, end),
        trailingWS: end < content.length ? content.slice(end) : '',
    };
}

function isWS(char) {
    return char === ' ' || char === '\t';
}

function isPlaintext(lang) {
    return !lang || ['plaintext', 'txt', 'text'].indexOf(lang) !== -1;
}

const defaultOpts = {
    theme: 'nord',
    fg: undefined,
    bg: undefined,
    showLineNumbers: (numberOfLines) => numberOfLines > 5,
};

export default async function createHighlighter(opts) {
    const options = { ...defaultOpts, ...opts };

    if (options.theme.endsWith('.json')) {
        options.theme = loadTheme(options.theme);
    } else {
        options.theme = getTheme(options.theme);
    }
    const baseSettings = ((options.theme['tokenColors'] || []).find((x) => !x.scope) || { settings: {} }).settings;
    const colors = options.theme.colors || {};
    const getThemeColor = (name) => baseSettings[name] || colors[`editor.${name}`] || colors[name];
    const fg = (options.fg || getThemeColor('foreground') || '#eeeeee').toLowerCase();
    const bg = (options.bg || getThemeColor('background') || '#222222').toLowerCase();
    return getHighlighter(options).then((highlighter) => (code, lang) =>
        render(isPlaintext(lang) ? [[{ content: code }]] : highlighter.codeToThemedTokens(code, lang), { ...options, fg, bg, lang }),
    );
}