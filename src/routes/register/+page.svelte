<script lang="ts">
    let email = "";
    let password = "";
    let confirmPassword = "";

    // event'in türünü tanımlıyoruz
    function handleSubmit(event: SubmitEvent): void {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Şifreler eşleşmiyor!");
            return;
        }
        alert(`Kayıt Başarılı: Email: ${email}`);
    }
</script>

<style>
    .register-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        font-family: Arial, sans-serif;
    }

    .register-form {
        background: #ffe8e1;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
        position: relative;
        text-align: center;
    }

    .register-form::before {
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
        color: #333;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Hafif gölge */
        text-align: center;
        width: 150px; /* Yarım ayın genişliği */
        height: 55px; /* Yarım ayın yüksekliği */
        line-height: 35px; /* Metni dikey ortalama */
    }

    .form-group {
        margin-bottom: 1rem;
        text-align: left;
    }

    .form-group label {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        font-weight: bold;
        color: #8a3a3a;
    }

    .form-group input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 20px;
        font-size: 1rem;
    }

    .form-group input:focus {
        border-color: #67cddf;
        outline: none;
    }

    .register-button {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        background-color: #a8e2f1;
        color: #333;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 1rem;
    }

    .register-button:hover {
        background-color: #82d4e8;
    }

    .form-footer {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #333;
    }

    .form-footer a {
        color: var(--brand-color);
        text-decoration: none;
        font-weight: bold;
    }

    .form-footer a:hover {
        text-decoration: underline;
    }

    .login-button {
        margin-top: 0.5rem;
        background: #82d4e8;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }

    .login-button:hover {
        background: #67cddf;
    }
</style>

<div class="register-container">
    <form class="register-form" on:submit={handleSubmit}>
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" bind:value={email} required />
        </div>

        <div class="form-group">
            <label for="password">Şifre</label>
            <input id="password" type="password" bind:value={password} required />
        </div>

        <div class="form-group">
            <label for="confirmPassword">Şifre Tekrar</label>
            <input id="confirmPassword" type="password" bind:value={confirmPassword} required />
        </div>

        <button type="submit" class="register-button">Kaydol</button>

        <div class="form-footer">
            <p>Hesabın var mı? Giriş yap.</p>
            <a href="/login" class="login-button">Giriş Yap</a>
        </div>
    </form>
</div>
