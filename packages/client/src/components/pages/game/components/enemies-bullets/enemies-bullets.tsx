import React from 'react'
import { useCanvas } from '../../hooks'
import Bullet from '../bullet'
import usePreloadedImagesRefs from '../../hooks/use-preloaded-images-refs'
import useGameContext from '../../hooks/use-game-context'

type Props = {
  refs: ReturnType<typeof usePreloadedImagesRefs>
}

function EnemiesBullets({ refs }: Props) {
  useCanvas()
  const game = useGameContext()

  return (
    <>
      {game?.gameState.enemiesBullets.map(bullet => (
        <Bullet
          key={bullet.id}
          type="enemy"
          bullet={bullet}
          imageRef={refs.enemyRocketRef}
        />
      ))}
    </>
  )
}

export default EnemiesBullets
