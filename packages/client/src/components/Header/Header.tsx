import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTS } from '../../routs/routsList'

//replace rdux
type headerType = {
  isAuth?: boolean
}

export const Header: React.FC<headerType> = ({ isAuth }) => {
  const location = useLocation()
  const [subMenu, setSubMenu] = useState(false)
  const permission = isAuth
  const showMenu = () => {
    const menu = document.getElementById('nav-menu')
    menu?.classList.add('show-menu')
  }

  const closeMenu = () => {
    const menu = document.getElementById('nav-menu')
    menu?.classList.remove('show-menu')
  }
  console.log(location.hash)
  console.log(location.pathname)
  return (
    <header className="header">
      <nav className="nav container">
        <Link to={ROUTS.START_PAGE} className="nav__logo">
          ZUKVA|<span>TEAM</span>
        </Link>

        <div className="nav__menu" id="nav-menu">
          {location.pathname === '/' && (
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Главная
                </a>
              </li>
              <li className="nav__item">
                <a href="#about-game" className="nav__link">
                  О игре
                </a>
              </li>
              <li className="nav__item">
                <a href="#rules-of-game" className="nav__link">
                  Правила игры
                </a>
              </li>
              <li className="nav__item liderboard">
                <Link to={ROUTS.FORUM_PAGE} className="nav__link">
                  Форум
                </Link>
              </li>
              <li className="nav__item liderboard">
                <Link to={ROUTS.LEADERBOARD_PAGE} className="nav__link">
                  Доска лидеров
                </Link>
              </li>
              <li className="nav__item chevron">
                <a
                  // to={ROUTS.LEADERBOARD_PAGE}
                  className="nav__link"
                  onClick={() => setSubMenu(!subMenu)}>
                  {/* Доска лидеров */}
                  {subMenu ? (
                    <i className="bx bxs-chevron-down"></i>
                  ) : (
                    <i className="bx bxs-chevron-right"></i>
                  )}
                </a>
                {subMenu && (
                  <div className="nav__item-sub-menu">
                    <div className="nav__item">
                      <Link to={ROUTS.FORUM_PAGE} className="nav__link">
                        Форум
                      </Link>
                    </div>
                    <div className="nav__item">
                      <Link to={ROUTS.LEADERBOARD_PAGE} className="nav__link">
                        Доска лидеров
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          )}
          <ul>
            {!isAuth ? (
              <li className="nav__item">
                <Link to={ROUTS.LOGIN_PAGE} className="home__button">
                  Войти
                </Link>
              </li>
            ) : (
              <li className="nav__item">
                <Link to={ROUTS.PROFILE_PAGE}>Профиль</Link>
              </li>
            )}
          </ul>
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="bx bx-x"></i>
          </div>
        </div>

        {/* toogle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  )
}
