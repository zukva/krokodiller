import React from 'react'

type SectionDataType = {
  description: string
}

const SectionData: React.FC<SectionDataType> = ({ description }) => {
  return (
    <div className="section__data">
      <h3 className="section__data-title">Section Title</h3>
      <p className="section__description">{description}</p>
    </div>
  )
}

export default SectionData
