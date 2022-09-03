<script>
    import "@fontsource/fira-mono";
    import "@fontsource/cooper-hewitt";
    import "sanitize.css";
    import "../style/global.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>
<Header />
<main class="container">
    <slot />
</main>
<Footer />

<style>

</style>