<script lang="ts">
    interface CartItem {
        id: number;
        name: string;
        price: number;
        quantity: number;
    }

    let cartItems: CartItem[] = [
        { id: 1, name: "Ad", price: 1500, quantity: 1 },
        { id: 2, name: "Ad", price: 1500, quantity: 1 },
        { id: 3, name: "Ad", price: 1500, quantity: 1 },
        { id: 4, name: "Ad", price: 1500, quantity: 1 }
    ];

    function updateQuantity(itemId: number, event: Event) {
        const target = event.target as HTMLSelectElement; // `event.target` türü burada belirtiliyor
        const newQuantity = parseInt(target.value, 10);
        cartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
    }

    function calculateTotal(): number {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
</script>

<style>

    .cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
   margin: 0.5rem auto;
    padding: 0.1rem;
    background-color: var(--lighter-bg-color);
    border-radius: 45px;
    max-width: 600px;
    max-height: 700px;
}

.cart-title {
    font-size: 1.8rem;
    color: var(--brand-color);
    margin-bottom: 2rem; /* Başlık altındaki boşluk artırıldı */
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: var(--light-bg-color);
    border-radius: 10px;
    margin-bottom: 1.5rem;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
    .cart-item img {
        width: 90px;
        height: 90px;
        border-radius: 20%;
        background-color: #ddd;
    }

    .cart-item-name {
        font-size: 1.2rem;
        color: #822b2b;
        margin-left: 1rem;
    }

    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 50px;
        background: var(--light-bg-color);
    }

    .cart-item-price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #822b2b;
    }

.cart-total {
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

<div class="cart-container">
    <h1 class="cart-title">Sepet</h1>

    {#each cartItems as item}
        <div class="cart-item">
            <img src="https://via.placeholder.com/60" alt={item.name} />
            <span class="cart-item-name">{item.name}</span>
            <div class="cart-item-quantity">
                <select bind:value={item.quantity} on:change={(e) => updateQuantity(item.id, e)}>
                    {#each Array(10)
                        .fill(0)
                        .map((_, i) => i + 1) as qty}
                        <option value={qty}>{qty}</option>
                    {/each}
                </select>
            </div>
            <span class="cart-item-price">{item.price * item.quantity} TL</span>
        </div>
    {/each}

    <div class="cart-total">
        Toplam: {calculateTotal()} TL
    </div>

    <button class="checkout-button">Ödemeye Geç</button>
</div>
