import React from 'react'
import { useCanvas } from '../../hooks'
import Enemy from '../enemy'
import usePreloadedImagesRefs from '../../hooks/use-preloaded-images-refs'
import useGameContext from '../../hooks/use-game-context'

type Props = {
  refs: ReturnType<typeof usePreloadedImagesRefs>
}

function Enemies({ refs }: Props) {
  useCanvas()
  const game = useGameContext()

  return (
    <>
      {game?.gameState.enemies.map(enemy => (
        <Enemy
          key={enemy.id}
          enemy={enemy}
          initialXPosition={enemy.x}
          enemyImageRef={refs.enemyBattlecruiserBaseRef}
          enemyDestructionRef={refs.enemyBattlecruiserDestructionRef}
        />
      ))}
    </>
  )
}

export default Enemies
