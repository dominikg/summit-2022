<script>
    import LogoLargeOutline from "../components/LogoLargeOutline.svelte";
</script>
<div class="wrapper">
    <div class="center">
        <LogoLargeOutline/>
    </div>
</div>
<style>
    .wrapper {
        height: 100%;
        overflow: hidden;
    }
    .center {
        height: 100%;
        display: grid;
        place-items: center;
        color: #ff3e00;
        transform: rotate(-25deg);
        fill-opacity: 0;
        stroke-width: 2;
    }
</style>