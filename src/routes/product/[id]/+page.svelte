<script>
    import CarbonFavoriteFilled from  "virtual:icons/carbon/favorite-filled";

    let product = {
        name: "MSI Thin",
        description:
            "Dizüstü Bilgisayar, Core i5-12450H, 15.6 FHD 144Hz, 16GB RAM, RTX4050 GDDR6 6GB, 512GB SSD, DOS",
        rating: 4,
        price: "5.000 TL",
        image: "https://via.placeholder.com/300"
    };

    let reviews = [
        {
            user: "User 1",
            rating: 3,
            comment: "Ürün hakkında yorum buraya gelecek."
        }
    ];

</script>

<style>
    .product-detail-container {
        max-width: 900px;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 20px;
    }

    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product-image {
        flex: 1;
        margin-right: 2rem;
        border-radius: 10%;
    }

    .product-info {
        flex: 2;
    }

    .product-name {
        font-size: 1.8rem;
        color: #822b2b;
        margin-bottom: 1rem;
    }

    .product-description {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .product-rating {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: #ff9f43;
    }

    .product-price {
        font-size: 1.5rem;
        color: #d35400;
        margin: 1rem 0;
    }

    .button-group {
        display: flex;
        gap: 1rem;
    }

    .button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 30px;
        cursor: pointer;
    }

    .button.add-cart {
        background-color: var(--accent-color);
        color: var(--brand-color);
        width: 400px;
        border: none;
    }

    .button.favorite {
        background-color: var(--accent-color);
        color: var(--brand-color);
        border: none;
    }

    .details-section {
        margin-top: 10px;
        padding: 0 15px 200px 0;
        background-color: var(--light-bg-color);
        border-radius: 20px;
    }

    .details-header {
        font-size: 1.4rem;
        color: var(--brand-color);
        background-color: var(--lighter-bg-color);
        margin-bottom: 1rem;
        border-radius: 20px;
        padding: 5px;
    }

    .reviews-section {
        margin-top: 2rem;
        padding: 20px;
        background-color: var(--light-bg-color);
        border-radius: 20px;
        padding: 0 15px 100px 0;
    }

    .review {
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    .review-header {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;

        color: var(--brand-color);
        border-radius: 50%;
    }

    .review-comment {
        margin-top: 2rem;
        font-size: 0.9rem;
        border-radius: 10px;
        background-color: white;
        color: black;
        padding: 10px 0 60px 15px;
    }

    .button.favorite {
        color: #d35400;
    }

    .button.favorite:hover {
        background-color: #fdd0b7;
    }



</style>

<div class="product-detail-container">
    <!-- Üst Bölüm -->
    <div class="header-section">
        <img class="product-image" src={product.image} alt={product.name} />

        <div class="product-info">
            <div class="product-name">{product.name}</div>
            <div class="product-description">{product.description}</div>
            <div class="product-rating">⭐ {product.rating}/5</div>
            <div class="product-price">{product.price}</div>

            <div class="button-group">
                <button class="button add-cart">Sepete Ekle</button>
                <button class="button
                favorite" aria-label="favori">
                    <CarbonFavoriteFilled />
                </button>
            </div>
        </div>
    </div>

    <!-- Ayrıntılı Bilgiler -->
    <div class="details-section">
        <div class="details-header">Ayrıntılı Bilgiler</div>
    </div>

    <!-- Kullanıcı Yorumları -->
    <div class="reviews-section">
        <div class="details-header">Kullanıcı Yorumları</div>
        {#each reviews as review}
            <div class="review">
                <div class="review-header">
                    <span>{review.user}</span>
                    <span>⭐ {review.rating}/5</span>
                </div>
                <div class="review-comment">{review.comment}</div>
            </div>
        {/each}
    </div>
</div>
