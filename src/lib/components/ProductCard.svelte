<script lang="ts">
    import { type Product, productFinalPriceCents } from "$lib/product";

    interface Props {
        product?: Product;
    }

    const { product = undefined }: Props = $props();

    const ratingFormat = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
    });

    const priceFormat = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    function formatRatingOutOf(max: number) {
        if (!product) return;
        const score = product.averageScoreOutOf100 / 100 * max;
        return ratingFormat.format(score);
    }

    function formatPrice() {
        if (!product) return;
        return priceFormat.format(productFinalPriceCents(product) / 100) + " ₺";
    }

</script>

<style lang="scss">
    @property --product-card-sk-whiteness {
        syntax: "<percentage>";
        inherits: false;
        initial-value: 100%;
    }

    @keyframes sk-color-spin {
        0% { --product-card-sk-whiteness: 100%; }
        50% { --product-card-sk-whiteness: 100%; }
        75% { --product-card-sk-whiteness: 0%; }
    }

    .card {
        --border-radius: 2rem;

        background: var(--lighter-bg-color);
        min-height: 20rem;
        min-width: 10rem;
        max-width: 17.5rem;
        display: grid;
        grid-auto-rows: auto 1fr;
        border-radius: var(--border-radius);
    }

    img, .image {
        display: block;
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: var(--border-radius);
    }

    .properties {
        padding-block: 0.5rem calc(var(--border-radius) * 0.25);
        padding-inline: calc(var(--border-radius) / 2);

        display: grid;
        grid-auto-rows: 1fr auto;
        grid-template-columns: 1fr 1fr;
        row-gap: 0.3rem;
    }

    .title {
        color: black;
        grid-column: 1 / -1;
    }

    .description {
        grid-column: 1 / -1;
        max-height: 6.5rem;
        overflow: hidden;
        text-overflow: ellipsis;

        & * {
            margin: 0;
        }
    }

    .rating {
        color: black;
        grid-column: 1;
        align-self: end;
    }

    .price {
        color: var(--brand-color);
        grid-column: 2;
        place-self: end;
    }

    p {
        margin: 0;
    }

    .skeleton {
        animation: 3s ease-in-out infinite sk-color-spin;

        --sk-color: color-mix(
            in oklch,
            white var(--product-card-sk-whiteness),
            var(--lighter-bg-color)
        );

        .image, .title, .description, .rating, .price {
            background: var(--sk-color);
        }

        .title {
            height: 24px;
            width: 70%;
        }

        .description {
            height: 48px;
            width: 100%;
        }

        .rating {
            height: 24px;
            width: 70%;
        }

        .price {
            height: 24px;
            width: 70%;
        }
    }
</style>

<div class="card" class:skeleton={!product}>
    {#if !product}
        <div class="image"></div>
        <div class="properties">
            <p class="title"></p>
            <p class="rating"></p>
            <p class="price"></p>
        </div>
    {:else}
        <img src={product.images[0]} alt="fotoğraf">
        <div class="properties">
            <p class="title">{product.name}</p>
            <p class="rating">{formatRatingOutOf(5)} / 5</p>
            <p class="price">{formatPrice()}</p>
        </div>
    {/if}
</div>
