<script>
    import ProductCard from "$lib/components/ProductCard.svelte";

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
    ];
</script>

<style>
    /* Genel Konteyner */
    .container {
        display: grid;
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
        grid-template-columns: 1fr 4.5fr; /* Sidebar için 1 birim, ana içerik için 3 birim */
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }

    /* Header */
    .header {
        grid-area: header;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    /* Search Bar */
    .search-bar-container {
        display: flex;
        justify-content: center; /* Ortala */
        align-items: center;
        gap: 1rem; /* Elemanlar arasına boşluk */
        margin-bottom: 2rem;
    }
    .sort-container {
        background-color: white;
        border-radius: 4px;
        padding: 1rem 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sort-dropdown {
        border: none;
        outline: none;
        border-radius: 4px;
        background: transparent;
        font-size: 1rem;
        cursor: pointer;
        color: #333;
        font-family: inherit;
    }

    .search-bar {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 30px;
        padding: 0.5rem;
        background: white;
        width: 50%; /* Genişlik */
        max-width: 600px; /* Maksimum genişlik */
    }

    .search-bar input {
        flex: 1;
        border: none;
        outline: none;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 30px;
    }

    .search-bar button {
        border: none;
        padding: 0.5rem 1rem;
        color: white;
        cursor: pointer;
        border-radius: 30px;
        display: flex;
        align-items: center;
    }

    .search-bar button i {
        font-size: 1rem;
    }

    /* Sidebar */
    .sidebar {
        grid-area: sidebar;
        background: var(--light-bg-color); /* Arka plan rengi */
        padding: 1.5rem;
        border-radius: 50px; /* Yumuşak köşeler */
        margin: 1rem; /* Çevresinde boşluk */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge */
        display: flex;
        flex-direction: column; /* İçerikleri dikey hizala */
        gap: 1.5rem; /* Elemanlar arasındaki boşluk */
        align-items: stretch; /* Elemanları tam genişlikte hizala */
    }

    /* Sidebar başlığı */
    .sidebar h2 {
        font-size: 1.5rem;
        color: var(--brand-color); /* Başlık rengi */
        text-align: center; /* Ortala */
        margin-bottom: 1.5rem;
    }

    /* Filtre kutuları */
    .filter {
        display: flex; /* H3 ve checkbox'ı yan yana hizala */
        align-items: center; /* Dikeyde ortala */
        gap: 0; /* H3 ve checkbox arasındaki boşluğu ayarla */
        background: var(--lighter-bg-color); /* Filtre kutusu arka planı */
        border-radius: 50px; /* Yumuşak köşeler */
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge */
    }

    /* Fiyat filtresi (Başlık üstte, range altta olacak şekilde düzenlenir) */
    .filter.price {
        display: flex;
        flex-direction: column; /* Alt alta hizalama */
        gap: 0.5rem; /* Elemanlar arasındaki boşluk */
        background: var(--lighter-bg-color); /* Filtre kutusu arka planı */
        border-radius: 50px; /* Yumuşak köşeler */
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge */
        text-align: left; /* Başlığı sola hizalar */
    }

    /* Fiyat filtresi başlık */
    .filter.price h3 {
        font-size: 1rem;
        color: var(--brand-color);
        margin: 0;
    }

    /* Fiyat filtresi input */
    .filter.price input[type="range"] {
        width: 80%;
        margin-top: 0.5rem; /* Başlık ile araya boşluk */
        cursor: pointer;
    }

    /* Filtre başlıkları */
    .filter h3 {
        font-size: 1rem;
        color: var(--brand-color);
        margin: 2px; /* Başlık etrafındaki boşlukları kaldır */
        padding-left: 10px;
        text-align: left;
    }

    /* Checkbox düzeni */
    .filter label {
        display: flex;
        justify-content: space-between; /* Yazı ve checkbox arasındaki mesafeyi yönetir */
        align-items: center;
        font-size: 1rem;
    }

    /* Checkbox boyutu */
    .filter input[type="checkbox"] {
        width: 20px; /* Checkbox boyutu */
        height: 20px; /* Checkbox boyutu */
        margin-left: 20px; /* Checkbox'ı sağa yasla */
        cursor: pointer;
    }

    /* Main Content */
    .main-content {
        grid-area: main;

        padding: 1rem;
    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    .pagination {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem; /* Oklar ve sayfa numarası arasındaki boşluk */
    }

    .pagination-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        font-size: 1.2rem;
        color: #d1745a; /* Ok rengi */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        transition: background-color 0.3s ease;
    }

    .pagination-button:hover {
        background-color: rgb(216, 181, 135); /* Hover durumu */
    }

    .pagination-info {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333; /* Sayfa numarası rengi */
        background: #fff; /* Sayfa numarası arka planı */
        padding: 0.5rem 1rem;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge */
    }

    /* Responsive */
    @media (max-width: 768px) {
        .container {
            grid-template-areas:
                "header"
                "main"
                "footer";
            grid-template-columns: 1fr;
        }

        .sidebar {
            display: none;
        }
    }
</style>

<div class="container">
    <!-- Header -->
    <header class="header"></header>

    <!-- Sidebar -->
    <aside class="sidebar">
        <h2>Filtreler</h2>
        <div class="filter price">
            <h3>Price</h3>
            <input type="range" min="500" max="2500" step="50" aria-label="Price filter" />
        </div>
        <div class="filter">
            <h3>İndirimli</h3>
            <label><input type="checkbox" /> </label>
        </div>
        <div class="filter">
            <h3>Almadıklarım</h3>
            <label><input type="checkbox" /> </label>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Search Bar -->
        <div class="search-bar-container">
            <div class="sort-container">
                <select class="sort-dropdown" aria-label="Sort Options">
                    <option value="default">Sort</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
            <form class="search-bar" role="search">
                <input type="text" placeholder="Search Products..." aria-label="Search Bar" />
                <button type="submit" aria-label="Search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>

        <!-- Product Grid -->
        <div class="product-grid">
            {#each products as product}
                <ProductCard {product} />
            {/each}
        </div>

        <!-- Pagination -->
        <div class="pagination">
            <button class="pagination-button" aria-label="Önceki Sayfa">
                <i class="fa fa-angle-double-left"></i>
            </button>
            <button class="pagination-button" aria-label="Önceki Sayfa">
                <i class="fa fa-angle-left"></i>
            </button>
            <span class="pagination-info">01</span>
            <button class="pagination-button" aria-label="Sonraki Sayfa">
                <i class="fa fa-angle-right"></i>
            </button>
            <button class="pagination-button" aria-label="Sonraki Sayfa">
                <i class="fa fa-angle-double-right"></i>
            </button>
        </div>
    </main>
</div>
