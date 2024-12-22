<script lang="ts">
    import "../global.scss";
    import Header from "$lib/layout_components/Header.svelte";
    import Footer from "$lib/layout_components/Footer.svelte";
</script>

<style>
    main {
        padding: 0.4em;
    }
</style>

<Header />

<main>
    <slot />
</main>

<Footer />
