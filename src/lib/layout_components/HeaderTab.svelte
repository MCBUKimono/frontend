<script lang="ts">
    import type { Snippet } from "svelte";
    import { page } from "$app/state";

    interface Props {
        href: string;
        children: Snippet;
        icon?: boolean;
    }

    const { href, children, icon = undefined }: Props = $props();

    function isHere() {
        if (href.endsWith("/")) {
            return page.url.pathname == href;
        }
        return page.url.pathname.startsWith(href);
    }
</script>

<style>
    a {
        background: white;
        padding-block: 0.5rem 0.25rem;
        padding-inline: 2rem;
        --br: 2rem;
        border-start-start-radius: var(--br);
        border-start-end-radius: var(--br);

        text-decoration: none;
        color: var(--brand-color);
    }

    a.selected {
        background: var(--theme-color);
    }

    a.icon > :global(*) {
        vertical-align: sub;
    }
</style>

<a {href} class:selected={isHere()} class:icon>{@render children()}</a>
