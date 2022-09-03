<script>
    import HeaderLink from "./HeaderLink.svelte";
    import dg from '../assets/dg.svg?raw'
</script>
<header>
    <div class="container">
        <nav>
            <HeaderLink svg={dg} href="https://goepel.it" label="home" />
        </nav>
        <div class="right">
            Enhance your DX - Svelte Summit 2022
        </div>
    </div>
</header>
<style>
    header {
        border-bottom: 1px solid currentColor;
    }
    .container {
        display: flex;
        font-size: 1.2rem;
        padding: 2rem 0;
    }
    .right {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
    }
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem 0;
        flex-grow: 1;
    }
</style>