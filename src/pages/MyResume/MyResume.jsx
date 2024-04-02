import css from "./MyResume.module.css"
import images from "../../assets/Images/images.png"
export default function MyResume() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.heroTitle}>ROMAN DENYSENKO</h1>
      <div className={css.starwrap}>
        <div className={css.leftBar}>
          content
          <div className={css.contTitle}>
            {" "}
            <h2 className={css.titleh2}>ПРОФІЛЬ</h2>
          </div>
          <p>
            Добросовісний та амбітний випускник двох вищих навчальних закладів. Маю талант
            пристосовуватися до нового, знаю чого прагну.
          </p>
          <div className={css.contTitle}>
            {" "}
            <h2 className={css.titleh2}>ДОСВІД</h2>
          </div>
          <h3>Компанія Омега </h3>
          <h4>Менеджер PR-Відділу </h4>
          <ul>
            <li>виконання обовязків</li>
            <li>виконання обовязків</li>
            <li>виконання обовязків</li>
          </ul>
          <h4>Менеджер Відділу Комунікацій</h4>
          <ul>
            <li>виконання обовязків</li>
            <li>виконання обовязків</li>
            <li>виконання обовязків</li>
          </ul>
          <div className={css.contTitle}>
            {" "}
            <h2 className={css.titleh2}>Освіта</h2>
          </div>
          <h4>Тренер з футболу</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, asperiores.</p>
          <h4>Маркетолог</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, asperiores.</p>
          <h4>Курс FullStack Developer від GOIT Academy</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, asperiores.</p>
        </div>

        <div className={css.rightBar}>
          content
          <img src={images} alt="me" width={400} />
          <div>
            <p>Телефон</p>
            <p>romarislm@gmail.com</p>
            <p> https://github.com/Romannorish</p>
            <p> https://www.linkedin.com/in/roman-denysenko-84a2bb166/</p>
            <h2 className={css.titleh2}>Навички</h2>
            <ul>
              <li>виконання обовязків</li>
              <li>виконання обовязків</li>
              <li>виконання обовязків</li>
            </ul>
            <h2 className={css.titleh2}>Технічні навички</h2>
            <ul>
              <li>виконання обовязків</li>
              <li>виконання обовязків</li>
              <li>виконання обовязків</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.footer}>content</div>
    </div>
  )
}
