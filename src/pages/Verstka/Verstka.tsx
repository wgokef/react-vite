import "./Verstka.scss";
import CardCinema from "../Verstka/CardCinema.tsx";

const Verstka = () => {
    return <div className='wrp'>
        <header className='header'>
            <nav className='header-menu'>
                <ul className='header-menu-list'>
                    <li className='header-menu-list-el'>Главная</li>
                    <li className='header-menu-list-el'> O кино</li>
                    <li className='header-menu-list-el'> Кадры</li>
                    <li className='header-menu-list-el'> Персонажи</li>
                </ul>
                <div className='header-menu-wrp'>
                    <button className='header-menu-wrp-btn'>Поддержка</button>
                </div>
            </nav>
            <article className='header-first'>
                <figure className='header-first-wrp'>
                    <h1 className='header-first-wrp-title'>Star Warseclipse™</h1>
                    <p className='header-first-wrp-description'>Новый приключенческий экшен c несколькими действующими персонажами и разветвленным повествованием,
                        события которого происходят в эпоху расцвета республики - от Quantic Dream и Lucasfilm Games.
                        Находится сейчас на ранней стадии разработки.</p>
                    <div className='header-first-wrp-btn'>
                        <button className='header-first-wrp-btn-text'>Посмотреть Трейлер</button>
                    </div>
                </figure>
            </article>
        </header>
        <main className='main'>
            <figure className='main-cinema'>
                <h3 className='main-cinema-title'>
                    Bce еще не можете определиться c выбором кино?
                </h3>
                <figure className='main-cinema-carucel'>
                    <button className='main-cinema-carucel-btn'>
                        <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 38.1051L65.829 -1.52588e-05L65.829 76.2102L0 38.1051Z" fill="#6F2B14" />
                        </svg>
                    </button>
                    <figure className='main-cinema-carucel-poster'>
                        <CardCinema
                            text='Звёздные войны: Эпизод 1 – Скрытая угроза'
                            url='/jpgs/cinema-one.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 2 – Атака клонов'
                            url='/jpgs/cinema-two.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 3 – Месть ситхов'
                            url='/jpgs/cinema-three.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 4 – Новая надежда'
                            url='/jpgs/cinema-four.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 5 – Империя наносит ответный...'
                            url='/jpgs/cinema-five.jpg'
                        />
                    </figure>
                    <button className='main-cinema-carucel-btn'>
                        <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#6F2B14" />
                        </svg>
                    </button>
                </figure>
            </figure>
            <aside className='main-aside'>
                <h4 className='main-aside-title'>У каждого выбора есть</h4>
                <p className='main-aside-description'>Любое принятое вами решение может иметь драматические последствия для вашего путешествия.
                    Образ жизни на Внешнем кольце находится под угрозой, и вы должны выбрать свой путь.</p>
            </aside>
     <figure className='main-frames'>
    <h3 className='main-frames-title'>Кадры из кино</h3>
    <div className='main-frames-content'>
        <div className='frame-item-1'></div>
        <div className='frame-item-2'></div>
        <div className='frame-item-3'></div>
        <div className='frame-item-4'></div>
        <div className='frame-item-5'></div>
        <div className='frame-item-6'></div>
        <div className='frame-item-7'></div>
        <div className='frame-item-8'></div>
        <div className='frame-item-9'></div>
    </div>
    <button className='main-frames-btn'>Раскрыть Ещё</button>
</figure>
            <figure className='main-trailer'>
    <h3 className='main-trailer-title'>Посмотреть трейлер</h3>
    <div className='main-trailer-content'>
        <div className='trailer-item trailer-item-1'>
            <button className='trailer-item-btn'>
                <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#ffffff"/>
                </svg>
            </button>
        </div>
        <div className='trailer-item trailer-item-2'>
            <button className='trailer-item-btn'>
                <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#ffffff"/>
                </svg>
            </button>
        </div>
        <div className='trailer-item trailer-item-3'>
            <button className='trailer-item-btn'>
                <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#ffffff"/>
                </svg>
            </button>
        </div>
    </div>
</figure>
            <article className='main-quote'>
                <div className='main-quote-wrp'>
                    <h2 className='main-quote-title'>Звёздные войны</h2>
                    <p className='main-quote-text'>«Делай до конца. Или не делай совсем.<br />Нет такого слова „Пытаться“»</p>
                    <p className='main-quote-author'>Мастер Йода</p>
                </div>
            </article>
            <figure className='main-characters'>
    <h3 className='main-characters-title'>Персонажи</h3>
    <div className='main-characters-carucel'>
        <button className='main-characters-carucel-btn'>
            <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 38.1051L65.829 -1.52588e-05L65.829 76.2102L0 38.1051Z" fill="#6F2B14" />
            </svg>
        </button>
        <div className='main-characters-carucel-poster'>
            <div className='character-card'>
                <div className='character-card-img character-img-1'></div>
                <div className='character-card-info'>
                    <h4 className='character-card-info-name'>Дарт Вейдер</h4>
                    <p className='character-card-info-description'> Центральный персонаж первых шести эпизодов саги «Звёздные войны». Также появляется в фильме «Изгой-один». </p>
                </div>
            </div>
            <div className='character-card'>
                <div className='character-card-img character-img-2'></div>
                <div className='character-card-info'>
                    <h4 className='character-card-info-name'>Оби-Ван Кеноби</h4>
                    <p className='character-card-info-description'>персонаж медиафраншизы «Звёздные войны». Один из немногих главных героев саги, появлявшихся в той или иной форме в семи фильмах франшизы. </p>
                </div>
            </div>
            <div className='character-card'>
                <div className='character-card-img character-img-3'></div>
                <div className='character-card-info'>
                    <h4 className='character-card-info-name'>Дарт Мол</h4>
                    <p className='character-card-info-description'>персонаж медиафраншизы «Звёздные войны», тёмный владыка ситхов, бывший ученик Дарта Сидиуса. </p>
                </div>
            </div>
            <div className='character-card'>
                <div className='character-card-img character-img-4'></div>
                <div className='character-card-info'>
                    <h4 className='character-card-info-name'>Асока Тано</h4>
                    <p className='character-card-info-description'>Бывший падаван Ордена джедаев. Придуман американским мультипликатором и сценаристом Дэйвом Филони.</p>
                </div>
            </div>
            <div className='character-card'>
                <div className='character-card-img character-img-5'></div>
                <div className='character-card-info'>
                    <h4 className='character-card-info-name'>Йода</h4>
                    <p className='character-card-info-description'>Вымышленный персонаж вселенной «Звёздные войны», гранд-мастер ордена джедаев. </p>
                </div>
            </div>
        </div>
        <button className='main-characters-carucel-btn'>
            <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#6F2B14" />
            </svg>
        </button>
    </div>
</figure>
            <aside className='main-faq'>
                <h2 className='main-faq-title'>Если остались вопросы по "Звездным войнам" мы на них ответим</h2>
                <p className='main-faq-text'>«Да пребудет c тобой Сила»</p>
                <form className='main-faq-form' action="/submit" method="post">
                    <input className='main-faq-form-input' type="text" name="question" placeholder="Ваш Вопрос" />
                    <input className='main-faq-form-submit' type="submit" value="Отправить" />
                </form>
            </aside>
        </main>
        <footer className='footer'>
            <div className='footer-wrp'>
                <nav className='footer-nav'>
                    <a className='footer-nav-link' href="#">Discord</a>
                    <a className='footer-nav-link' href="#">YouTube</a>
                    <a className='footer-nav-link' href="#">Facebook</a>
                    <a className='footer-nav-link' href="#">Telegram</a>
                    <a className='footer-nav-link' href="#">Twitter</a>
                    <a className='footer-nav-link' href="#">Instagram</a>
                    <a className='footer-nav-link' href="#">Reddit</a>
                    <a className='footer-nav-link' href="#">Gmail</a>
                </nav>
                <h2 className='footer-title'>Star Wars Eclipse™</h2>
                <h5 className='footer-copyright'>Star Wars © & ™ Lucasfilm Ltd.
                    All Rights Reserved.
                    © 2023 Quantic Dream.
                    Quantic Dream and the Quantic Dream logo are trademarks of Quantic Dream.
                    All Rights Reserved.
                    All other marks belong to their respective owners.</h5>
            </div>
        </footer>
    </div>
}
export default Verstka;



