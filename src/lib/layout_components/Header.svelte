<script>
    import HeaderTab from "$lib/layout_components/HeaderTab.svelte";
    import CartIcon from "virtual:icons/material-symbols/shopping-cart";
</script>

<style lang="scss">
    header {
        --header-height: 8rem;
        height: var(--header-height);
        display: grid;
    }

    nav {
        display: grid;
        grid-auto-flow: row;
        grid-template-rows: 1fr auto;

        .brand {
            grid-area: 1 / 1;
            color: var(--brand-color);
            text-decoration: none;

            font-size: 2rem;
            font-weight: normal;
            margin-inline-start: 2rem;

            align-self: center;
            justify-self: start;
        }

        .tabs {
            grid-area: 1 / 1;
            align-self: end;

            display: flex;
            justify-content: center;
            align-items: end;
            gap: 2.5rem;
        }
    }

    .decorations {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: -200;
        pointer-events: none;

        @mixin balloon($size, $offset-x, $offset-y, $color) {
            --offset-x: #{$offset-x};
            --offset-y: #{$offset-y};
            --size: #{$size};
            position: absolute;
            width: var(--size);
            height: var(--size);
            border-radius: var(--size);
            left: calc(var(--offset-x) - var(--size) / 2);
            top: calc(var(--offset-y) - var(--size) / 2);
            background: $color;
        }

        .balloon-1 {
            --s: calc(var(--header-height) * 3.125);
            @include balloon(var(--s), 3rem, 1rem, var(--accent-color));
        }
        .balloon-2 {
            --s: calc(var(--header-height) * 1.25);
            --y: calc(var(--header-height) - calc(var(--s) * 0.2));
            @include balloon(var(--s), 45vw, var(--y), var(--primary-color));
        }
        .balloon-3 {
            --s: calc(var(--header-height) * 1.0);
            @include balloon(var(--s), 70vw, 0px, var(--accent-color));
        }
        .balloon-4 {
            --s: calc(var(--header-height) * 0.5);
            --y: calc(var(--header-height) * 0.45);
            @include balloon(var(--s), 92vw, var(--y), var(--primary-color));
        }
    }
</style>

<header class="shrink">
    <div class="decorations">
        <div class="balloon-1"></div>
        <div class="balloon-2"></div>
        <div class="balloon-3"></div>
        <div class="balloon-4"></div>
    </div>
    <nav>
        <a href="/" class="brand">Kimono</a>
        <div class="tabs">
            <HeaderTab href="/">Home</HeaderTab>
            <HeaderTab href="/search">Search</HeaderTab>
            <HeaderTab href="/favorites">Favorites</HeaderTab>
            <HeaderTab href="/cart" icon><CartIcon /></HeaderTab>
        </div>
    </nav>
</header>
