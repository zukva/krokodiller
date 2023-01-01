import { useCanvas } from '../../hooks'
import useGameContext from '../../hooks/use-game-context'

function Score() {
  const context = useCanvas()
  const game = useGameContext()

  if (context && game) {
    context.font = '16px serif'
    context.fillText(game.gameState.score.toString(), 20, 20)
  }

  return null
}

export default Score
