<script lang="ts">
    import { type Product, productFinalPriceCents } from "$lib/product";
    import { priceFormat } from "$lib/formats";
    import Title from "$lib/components/Title.svelte";

    interface CartItem {
        product: Product;
        quantity: number;
    }

    const products = [
        {
            id: 1,
            name: "iPhone 16",
            priceCents: 250000,
            images: ["https://placehold.co/200x200"],
            description: "En yeni teknolojiyle donatılmış iPhone modeli.",
            brand: "Apple",
            category: "Cep Telefonları",
            averageScoreOutOf100: 95,
            discountPer1000: 0,
            taxPer1000: 200
        },
        {
            id: 2,
            name: "Samsung Galaxy",
            priceCents: 220000,
            images: ["https://placehold.co/200x200"],
            description: "Yüksek performans ve geniş ekran deneyimi.",
            brand: "Samsung",
            category: "Cep Telefonları",
            averageScoreOutOf100: 90,
            discountPer1000: 0,
            taxPer1000: 200
        },
        {
            id: 3,
            name: "Xiaomi Redmi",
            priceCents: 200000,
            images: ["https://placehold.co/200x200"],
            description: "Uygun fiyatlı ve yüksek özellikli akıllı telefon.",
            brand: "Xiaomi",
            category: "Cep Telefonları",
            averageScoreOutOf100: 88,
            discountPer1000: 0,
            taxPer1000: 200
        },
        {
            id: 4,
            name: "OnePlus Nord",
            priceCents: 210000,
            images: ["https://placehold.co/200x200"],
            description: "Amiral gemisi özelliklerini uygun fiyata sunar.",
            brand: "OnePlus",
            category: "Cep Telefonları",
            averageScoreOutOf100: 89,
            discountPer1000: 0,
            taxPer1000: 200
        },
        {
            id: 5,
            name: "Google Pixel",
            priceCents: 230000,
            images: ["https://placehold.co/200x200"],
            description: "Yüksek kaliteli kamera ve akıcı Android deneyimi.",
            brand: "Google",
            category: "Cep Telefonları",
            averageScoreOutOf100: 92,
            discountPer1000: 0,
            taxPer1000: 200
        },
        {
            id: 6,
            name: "Huawei Mate",
            priceCents: 240000,
            images: ["https://placehold.co/200x200"],
            description: "Performans ve tasarımda mükemmel denge.",
            brand: "Huawei",
            category: "Cep Telefonları",
            averageScoreOutOf100: 91,
            discountPer1000: 0,
            taxPer1000: 200
        }
    ] satisfies Product[];

    let cartItems: CartItem[] = $state([]);
    for (const product of products) {
        cartItems.push({
            product: product,
            quantity: 1,
        })
    }

    let total: number = $derived.by(() => {
        let total = 0;
        for (const cartItem of cartItems)
            total += cartItem.quantity * productFinalPriceCents(cartItem.product);
        return total;
    });

    let formattedTotal: string = $derived(priceFormat.format(total / 100));
</script>

<style>
.cart {
    display: grid;
    grid-auto-flow: row;
    margin: 0.5rem auto;
    background-color: var(--lighter-bg-color);
    border-radius: 45px;
    max-width: 60ch;
}

.title {
    font-size: 1.8rem;
    color: var(--brand-color);
    margin-bottom: 2rem; /* Başlık altındaki boşluk artırıldı */
}

.item {
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    grid-template-columns: auto 5fr 1fr 3fr;
    background-color: var(--light-bg-color);
    border-radius: 10px;
    margin-bottom: 1.5rem;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item img {
    width: 90px;
    height: 90px;
    border-radius: 20%;
    background-color: #ddd;
}

.item-name {
    font-size: 1.2rem;
    color: #822b2b;
    margin-left: 1rem;
}

.item-quantity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 50px;
    background: var(--light-bg-color);
}

.item-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #822b2b;
}

.total {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #822b2b;
    text-align: center;
}

.checkout-button {
    margin: 1rem;
    padding: 0.75rem 2rem; /* Daha geniş buton */
    font-size: 1rem;
    color: var(--brand-color);
    background-color: #75c2d6;
    border: none;
    border-radius: 25px; /* Butonu daha yuvarlak hale getirme */
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.checkout-button:hover {
    background-color: #5aa6ba;
}

</style>

<Title title="Sepet"><h1 class="title">Sepet</h1></Title>

<div class="cart">
    {#each cartItems as item}
        <div class="item">
            <img src="https://placeholder.co/200" alt={item.product.name} />
            <span class="item-name">{item.product.name}</span>
            <div class="item-quantity">
                <select bind:value={item.quantity}>
                    {#each Array(10)
                        .fill(0)
                        .map((_, i) => i + 1) as qty}
                        <option value={qty}>{qty}</option>
                    {/each}
                </select>
            </div>
            <span class="item-price">{productFinalPriceCents(item.product) / 100 * item.quantity} TL</span>
        </div>
    {/each}

    <div class="total">
        Toplam: {formattedTotal} TL
    </div>

    <button class="checkout-button">Ödemeye Geç</button>
</div>
