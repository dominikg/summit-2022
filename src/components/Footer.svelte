<script>
    import {onMount} from "svelte";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'
    import {pageOrder as list} from "../routes/page-order.js";

    $: currentIndex = list.indexOf('/'+$page.routeId);
    $: next = (currentIndex < (list.length -1)) ? list[currentIndex +1] : null
    $: prev = (currentIndex > 0) ? list[currentIndex -1] : null

    function isInEditor(e) {
        let el = e.target;
        while(el) {
            if(el.classList?.contains('svelte-inline-editor')) {
                return true;
            }
            if(el === el.parentNode) {
                break;
            }
            el = el.parentNode;
        }
        false;
    }
    const keyNavListener = e => {
        if((e.key === ' ' || e.key === 'ArrowRight') && next != null) {
            if(!isInEditor(e)) {
                goto(next)
            }
        } else if(e.key === 'ArrowLeft' && prev != null) {
            if(!isInEditor(e)) {
                goto(prev)
            }
        }
    }
    onMount(()=>{
        document.body.addEventListener('keyup',keyNavListener)
        return ()=> document.body.removeEventListener("keyup",keyNavListener)
    })
</script>
<footer>
    <div class="container">
        <span>dominikg &copy; 2022</span>
        <nav>
            {#if prev}
                <a href={prev}>prev</a>
            {/if}
            {#if next}
                <a href={next}>{currentIndex === 0 ? 'start':'next'}</a>
            {/if}
            <ThemeSwitch/>
        </nav>
    </div>
</footer>
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0 0.5rem;
        padding: 1rem 0.25rem;
        font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    nav {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
</style>
