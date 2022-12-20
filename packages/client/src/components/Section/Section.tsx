import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTS } from '../../routs/routsList'

import draw from '../../assets/img/brushDraw.png'

const SectionPart = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container">
        <div className="home__data">
          <span className="home__subtitle">Добро пожаловать</span>
          <h1 className="home__title">Игра Крокодил</h1>
          <p className="home__description">Проведи время весело ;)</p>
          <Link to={ROUTS.REGISTER_PAGE} className="home__button">
            Играть сейчас
          </Link>
        </div>

        <div className="home__img">
          <div className="circle__img"></div>
          <img src={draw} alt="image" />
          <div className="home__shadow"></div>
        </div>
      </div>

      <footer className="home__footer">
        <span>
          <i className="bx bxs-chevron-down"></i>
        </span>
        <span>|</span>
        <span>
          <i className="bx bxs-chevron-down"></i>
        </span>
      </footer>
    </section>
  )
}

export default SectionPart
