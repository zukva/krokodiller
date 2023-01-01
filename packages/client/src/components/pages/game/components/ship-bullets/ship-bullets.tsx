import React from 'react'
import { useCanvas } from '../../hooks'
import Bullet from '../bullet'
import usePreloadedImagesRefs from '../../hooks/use-preloaded-images-refs'
import useGameContext from '../../hooks/use-game-context'

type Props = {
  refs: ReturnType<typeof usePreloadedImagesRefs>
}

function ShipBullets({ refs }: Props) {
  useCanvas()
  const game = useGameContext()

  return (
    <>
      {game?.gameState.shipBullets.map(bullet => (
        <Bullet
          key={bullet.id}
          type="ship"
          bullet={bullet}
          imageRef={refs.shipRocketRef}
        />
      ))}
    </>
  )
}

export default ShipBullets
