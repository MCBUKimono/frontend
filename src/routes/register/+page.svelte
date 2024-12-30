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
    }

    .form-footer {
        font-size: 0.9rem;
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
            Hesabın var mı?
            <a href="/login" class="login-button">Giriş yap.</a>
        </div>
    </form>
</div>
