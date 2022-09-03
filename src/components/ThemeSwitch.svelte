<script>
    import bulb from 'iconoir/icons/light-bulb-on.svg?raw';
    import { onMount } from 'svelte';
    let theme = 'light';
    onMount(() => {
        theme = getTheme();
    });
    function getTheme() {
        if (!window) {
            return 'light';
        }
        const storedValue = window.localStorage.getItem('theme');
        if (storedValue) {
            return storedValue;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function toggleTheme() {
        const body = document.body;
        body.classList.add('themeanim');
        body.classList.remove(`${theme}`);
        theme = theme === 'dark' ? 'light' : 'dark';
        body.classList.add(`${theme}`);
        window.localStorage.setItem('theme', theme);

        const onTransitionEnd = function () {
            body.removeEventListener('transitionend', onTransitionEnd);
            body.classList.remove('themeswitch');
        };
        body.addEventListener('transitionend', onTransitionEnd);
    }
</script>

<button
        type="button"
        class="themeswitch"
        class:light={theme !== 'dark'}
        aria-label="toggle color-scheme"
        on:click={() => {
		toggleTheme();
	}}
>
    {@html bulb}
</button>

<style>
    :global(body.themeanim) {
        transition: color 250ms ease-in-out, background-color 500ms ease-in-out;
    }
    .themeswitch {
        all: unset;
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        display: grid;
        place-items: center;
    }

    .themeswitch.light :global(svg > path:nth-child(-n + 4)) {
        display: none;
    }
    .themeswitch:hover {
        color: currentColor;
    }
    .themeswitch :global(svg) {
        fill: transparent;
        transition: all 200ms ease-in-out;
        transform: scale(1.1);
    }
    .themeswitch:hover :global(svg) {
        fill: var(--fg);
    }
</style>