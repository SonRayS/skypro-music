import Image from "next/image";

function LoginPage() {
    return (
        <body>
            <div class="wrapper">
                <div class="container-signup">
                    <div class="modal__block">
                        <form class="modal__form-login">
                            <a href="../">
                                <div class="modal__logo">
                                    <Image
                                        src="../img/logo_modal.png"
                                        alt="logo"
                                        width={250}
                                        height={170}
                                    />
                                </div>
                            </a>
                            <input
                                class="modal__input login"
                                type="text"
                                name="login"
                                placeholder="Почта"
                            />
                            <input
                                class="modal__input password-first"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <input
                                class="modal__input password-double"
                                type="password"
                                name="password"
                                placeholder="Повторите пароль"
                            />
                            <button class="modal__btn-signup-ent">
                                <a href="../index.html">Зарегистрироваться</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default LoginPage;
