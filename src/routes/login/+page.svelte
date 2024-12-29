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
    }

    .form-footer {
        font-size: 0.9rem;
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
            Hesabın yok mu?
            <a href="/register">Kayıt ol.</a>
        </div>
    </form>
</div>
