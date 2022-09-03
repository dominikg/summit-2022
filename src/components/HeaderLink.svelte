<script>
    export let svg;
    export let href;
    export let external = false;
    export let size = '2rem';
    export let label = 'link';
</script>

{#if external}
    <a
            {href}
            rel="external,noopener"
            target="_blank"
            style:width={size}
            style:height={size}
            aria-label={label}>{@html svg}</a
    >
{:else}
    <a {href} style:width={size} style:height={size} aria-label={label}>{@html svg}</a>
{/if}

<style>
    a {
        display: grid;
        place-items: center;
    }
    a:hover {
        color: #ff3e00;
    }
    a :global(svg) {
        height: 24px;
        width: 24px;
    }
</style>
