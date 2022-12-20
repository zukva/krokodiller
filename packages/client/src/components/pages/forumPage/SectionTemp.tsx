import React from 'react'

//import css

type SectionTempType = {
  id?: string
  clsFigure?: string
  imgContent?: string
  dataDesc?: string
  children?: JSX.Element | string
}

export const SectionTemp: React.FC<SectionTempType> = ({
  id,

  children,
}) => {
  return (
    <section className="section" id={id}>
      <div className="section__container container">{children}</div>
    </section>
  )
}
