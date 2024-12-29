<script module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import ProductCard from "./ProductCard.svelte";

    // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
    const { Story } = defineMeta({
        title: "Components/ProductCard",
        component: ProductCard,
        tags: ["autodocs"],
        argTypes: {
            product: {
                control: "object"
            }
        }
    });
</script>

<Story name="Skeleton" />
<Story
    name="Given"
    args={{
        product: {
            id: 1,
            name: "iPhone 16 Pro Max",
            priceCents: 1600000,
            images: ["https://placehold.co/200x200"],
            description:
                "<p>Çok iyi telefon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error repellat impedit maiores veniam molestiae qui laudantium? Harum sunt tempore veritatis facere consectetur ea quisquam ipsam. Quam suscipit veritatis placeat?</p>",
            brand: "Apple",
            category: "Cep Telefonları",
            averageScoreOutOf100: 97.0,
            discountPer1000: 0.0,
            taxPer1000: 200.0
        }
    }}
/>
