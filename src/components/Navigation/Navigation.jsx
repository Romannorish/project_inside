import {NavLink} from "react-router-dom"
import css from "./Navigation.module.css"

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.list}>
          <NavLink className={css.item} to="/">
            Home
          </NavLink>
          <NavLink className={css.item} to="/aboutme">
            About me
          </NavLink>
          <NavLink className={css.item} to="/works">
            My works
          </NavLink>
          <NavLink className={css.item} to="/resume">
            My resume
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
