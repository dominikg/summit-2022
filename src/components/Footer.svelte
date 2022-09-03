<script>
    import {onMount} from "svelte";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'
    const slides = 'slides/'
    function slideLink(n,d) {
        return `/${slides}${String(slideNo+d).padStart(2,'0')}`
    }
    $: isSlide = $page.routeId?.startsWith(slides);
    $: slideNo = isSlide ? parseInt($page.routeId.replace('slides/','')) : 0;
    $: next = slideLink(slideNo,1)
    $: prev = slideNo > 1 ? slideLink(slideNo,-1) : '/'
    let listening = false;
    const keyNavListener = e => {
        if(e.key === ' ' || e.key === 'ArrowRight') {
            goto(next)
        } else if(e.key === 'ArrowLeft') {
            goto(prev)
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
            {#if !isSlide}
                <a href='/slides/01'>start</a>
            {:else}
                <a href={prev}>prev</a>
                <a href={next}>next</a>
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
        padding: 2rem 0.25rem;
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
