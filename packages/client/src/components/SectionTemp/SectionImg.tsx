import React from 'react'

type SectionImgType = {
  igmSrc: string
  figureCls: string
  id: string
}

const SectionImg: React.FC<SectionImgType> = ({ igmSrc, figureCls, id }) => {
  return (
    <div className="section__img">
      <div
        className={
          figureCls ? `figure__img ${figureCls}` : 'figure__img'
        }></div>
      <img src={igmSrc} alt="image" />
      {id === 'home' && <div className="home__shadow"></div>}
    </div>
  )
}

export default SectionImg
