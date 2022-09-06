<script>
    import svg from '$assets/evolution.svg?raw'
    export let highlight = 0;
</script>

<div class="center highlight-{highlight}">
    {@html svg}
</div>

<style>
    .center {
        display: grid;
        place-items: center;
        margin-bottom: 5rem;
    }
    .center :global(svg path:nth-child(1)) {
        transform: scaleY(1.1);
        transform-origin: bottom;
    }
    .center :global(svg path:nth-child(2)) {
        transform: scaleY(0.9);
        transform-origin: bottom;
    }
    .center :global(svg path:nth-child(3)) {
        transform: translateX(0.4rem);
        transform-origin: bottom;
    }

    .center :global(svg path:nth-child(4)) {
        transform: translateX(-0.2rem);
        transform-origin: bottom;
    }

    .center :global(svg path) {
        opacity: 0
    }
    .center.highlight-0 :global(svg path) {
        opacity: 0.2
    }

    .center.highlight-1 :global(svg path:nth-child(1)) {
        opacity: 1
    }
    .center.highlight-1 :global(svg path:nth-child(-n)) {
        opacity: 0.3
    }
    .center.highlight-2 :global(svg path:nth-child(2)) {
        opacity: 1
    }
    .center.highlight-2 :global(svg path:nth-child(-n+1)) {
        opacity: 0.3
    }
    .center.highlight-3 :global(svg path:nth-child(3)) {
        opacity: 1
    }
    .center.highlight-3 :global(svg path:nth-child(-n+2)) {
        opacity: 0.3
    }
    .center.highlight-4 :global(svg path:nth-child(4)) {
        opacity: 1;
        fill-opacity: 0;
        stroke: currentColor;
        stroke-width: 1.5;
        stroke-opacity: 1;
        stroke-dasharray: 3.5;
    }
    .center.highlight-4 :global(svg path:nth-child(-n+3)) {
        opacity: 0.3;
    }

    .center.highlight-5 :global(svg path:nth-child(4)) {
        opacity: 1;
        fill-opacity: 0;
        stroke: currentColor;
        stroke-width: 1.5;
        stroke-opacity: 1;
    }
    .center.highlight-5 :global(svg path:nth-child(-n+3)) {
        opacity: 0.3;
    }

    .center.highlight-6 :global(svg path:nth-child(4)) {
        opacity: 1;
        fill-opacity: 0;
        stroke: #ff3e00;
        stroke-width: 1.5;
        stroke-opacity: 1;
    }
    .center.highlight-6 :global(svg path:nth-child(-n+3)) {
        opacity: 0.3;
    }
    .center.highlight-7 :global(svg path:nth-child(4)) {
        opacity: 1;
        fill-opacity: 1;
        fill: #ff3e00;
    }
    .center.highlight-7 :global(svg path:nth-child(-n+3)) {
        opacity: 0.3;
    }
</style>