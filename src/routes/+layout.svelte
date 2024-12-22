<script lang="ts">
    import "../global.scss";
    import Header from "$lib/layout_components/Header.svelte";
    import Footer from "$lib/layout_components/Footer.svelte";
</script>

<style>
    :global(body) {
        background: var(--light-bg-color);
    }

    main {
        --r: min(1em, 2.5vw);
        background: var(--theme-color);
        border-radius: calc(var(--r) * 2.5);
        padding: calc(var(--r) * 1.25);
    }
</style>

<Header />

<main>
    <slot />
</main>

<Footer />
