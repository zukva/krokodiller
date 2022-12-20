import React from 'react'
import SectionImg from './SectionImg'

//import css

import draw from '../../assets/img/brushDraw.png'
import SectionData from './SectionData'
import SectionFooter from './SectionFooter'

type SectionTempType = {
  id?: string
  clsFigure?: string
  imgContent?: string
  dataDesc?: string
  children?: JSX.Element | string
}

export const SectionTemp: React.FC<SectionTempType> = ({
  id,
  imgContent,
  clsFigure,
  dataDesc,
  children,
}) => {
  return (
    <section className="section" id={id}>
      <div className="section__container container">
        {/* <SectionImg
          id={id || ''}
          figureCls={clsFigure || ''}
          igmSrc={imgContent || ''}
        />
        <SectionData description={dataDesc || ''} /> */}
        {children}
      </div>
      <SectionFooter />
    </section>
    // <section className="section" id={id}>
    //   <div className="section__container container">
    //     {/* img comp */}
    //     <div className="section__img">
    //       <div
    //         className={
    //           clsFigure ? `figure__img ${clsFigure}` : 'figure__img'
    //         }></div>
    //       <img src="" alt="" />
    //       {id === 'home' && <div className="home__shadow"></div>}
    //     </div>
    //     {/* img comp/ */}
    //     {/* data comp */}
    //     <div className="section__data">
    //       <p className="section__description">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    //         ducimus accusamus culpa rerum vitae distinctio soluta unde, expedita
    //         quam odio.
    //       </p>
    //     </div>
    //     {/* data comp/ */}
    //   </div>
    //   {/* footer comp */}
    //   <footer className="section__footer">
    //     <span>
    //       <i className="bx bxs-chevron-down"></i>
    //     </span>
    //     <span>|</span>
    //     <span>
    //       <i className="bx bxs-chevron-down"></i>
    //     </span>
    //   </footer>
    //   {/* footer comp/ */}
    // </section>
  )
}
