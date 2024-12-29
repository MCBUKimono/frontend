<script lang="ts">
    let email = "";
    let password = "";

    function handleLogin(event: SubmitEvent): void {
        event.preventDefault();
        alert(`Login attempted with Email: ${email}`);
        // Burada API çağrısı yapılabilir.
    }
</script>

<style>
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .login-form {
        position: relative;
        background: var(--lighter-bg-color);
        padding: 2rem;
        border-radius: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
        text-align: center;
    }
    .login-form::before {
        content: "Giriş";
        position: absolute;
        top: -55px; /* Yarım ayın formun üstünde olması */
        left: 50%;
        transform: translateX(-50%);
        background: #a8e2f1;
        padding: 1rem 2rem; /* Yarım ayın genişliği */
        border-radius: 50px 50px 0 0; /* Üst kenar yuvarlatma */
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--brand-color);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge */
        text-align: center;
        width: 150px; /* Yarım ayın genişliği */
        height: 55px; /* Yarım ayın yüksekliği */
        line-height: 35px; /* Metni dikey ortalama */
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        font-size: 1rem; /* Boyutu biraz artırabilirsiniz */
        font-weight: bold; /* Kalınlaştırma */
        margin-bottom: 0.5rem;
        color: var(--brand-color);
        text-align: left; /* Yazıları sağa hizalamak için */
        padding-right: 10px; /* Sağ tarafta biraz boşluk bırakmak için */
    }

    .form-group input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 30px;
        font-size: 1rem;
    }

    .form-group input:focus {
        border-color: #007bff;
        outline: none;
    }

    .login-button {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        background-color: #a8e2f1;
        color: var(--brand-color);
        border: none;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 1rem;
    }

    .login-button:hover {
        background-color: var(--primary-color);
        color: white;
    }

    .form-footer {
        margin-top: 1rem;
        font-size: 0.9rem;
    }

    .form-footer a {
        color: #007bff;
        text-decoration: none;
    }

    .form-footer a:hover {
        text-decoration: underline;
    }
</style>

<div class="login-container">
    <form class="login-form" on:submit={handleLogin}>
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" bind:value={email} required />
        </div>

        <div class="form-group">
            <label for="password">Şifre</label>
            <input id="password" type="password" bind:value={password} required />
        </div>

        <button type="submit" class="login-button">Giriş Yap</button>

        <div class="form-footer">
            <p>
                Hesabın yok mu?
                <a href="/register">Kayıt ol</a>.
            </p>
        </div>
    </form>
</div>
