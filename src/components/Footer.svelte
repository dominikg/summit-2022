<footer>
    <div class="container">
        <span>dominikg &copy; 2022</span>
        <nav>
            <a href="">prev</a>
            <a href="">next</a>
        </nav>
    </div>
</footer>
<style>
    footer {
        border-top: 1px solid currentColor;
    }
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
