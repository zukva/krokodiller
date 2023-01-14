import { useEffect } from 'react'

import { useCanvas } from '../../hooks'
import checkCollision from '../../engine/utils/check-collision'
import useGameContext from '../../hooks/use-game-context'

type Props = {
  handleStopGame: () => void
}

function CollisionChecker({ handleStopGame }: Props) {
  useCanvas()
  const game = useGameContext()
  const isShipEnemyCollision =
    game && checkCollision([game?.gameState.ship], game?.gameState.enemies)
  const isShipEnemyBulletCollision =
    game &&
    checkCollision(game?.gameState.enemiesBullets, [game?.gameState.ship])
  game?.checkEnemyShipBulletsCollision()

  useEffect(() => {
    if (isShipEnemyCollision || isShipEnemyBulletCollision) {
      handleStopGame()
    }
  }, [isShipEnemyCollision, isShipEnemyBulletCollision])

  return null
}

export default CollisionChecker
