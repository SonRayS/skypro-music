import Image from "next/image";

function LoginPage() {
    return (
        <body>
            <div class="wrapper">
                <div class="container-enter">
                    <div class="modal__block">
                        <form class="modal__form-login" action="#">
                            <a href="../">
                                <div class="modal__logo">
                                    <Image
                                        src="./img/logo_modal.png"
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
                                class="modal__input password"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                            <button class="modal__btn-enter">
                                <a href="../index.html">Войти</a>
                            </button>
                            <button class="modal__btn-signup">
                                <a href="signup.html">Зарегистрироваться</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default LoginPage;
