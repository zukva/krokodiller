import React from 'react'

import draw from '../../assets/img/brushDraw.png'
import SectionPart from '../Section/Section'
import { SectionTemp } from '../SectionTemp/SectionTemp'
import SectionImg from '../SectionTemp/SectionImg'
import SectionData from '../SectionTemp/SectionData'

const AboutDesc = `About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
magnam deserunt sit distinctio vitae. Deleniti modi voluptatem quod
quas accusamus`
const RulesDesc = `Rules Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
magnam deserunt sit distinctio vitae. Deleniti modi voluptatem quod
quas accusamus`

const Main = () => {
  return (
    <main className="main">
      <SectionPart />
      <SectionTemp id={'about-game'}>
        <>
          <SectionImg
            id={'about-game'}
            figureCls={'circle__img'}
            igmSrc={draw}
          />
          <SectionData description={AboutDesc} />
        </>
      </SectionTemp>
      <SectionTemp id={'rules-of-game'}>
        <>
          <SectionData description={RulesDesc} />
          <SectionImg
            id={'rules-of-game'}
            figureCls={'circle__img'}
            igmSrc={draw}
          />
        </>
      </SectionTemp>
    </main>
  )
}

export default Main
