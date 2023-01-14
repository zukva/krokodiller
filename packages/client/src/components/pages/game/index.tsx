import Game from './game'
import { GameContext } from './contexts'
import { useEffect, useState } from 'react'
import GameEngine from './engine/game-engine'
import { Nullable } from '../../../types'
import Preloader from '../../common/preloader'

const GameWrapper = () => {
  const [gameEngine, setGameEngine] = useState<Nullable<GameEngine>>(null)
  useEffect(() => {
    if (gameEngine) {
      return
    }
    const game = new GameEngine()
    game.initResources().then(() => {
      setGameEngine(game)
    })
  }, [gameEngine])

  if (gameEngine === null) {
    return <Preloader />
  }
  return (
    <GameContext.Provider value={gameEngine}>
      {gameEngine && <Game />}
    </GameContext.Provider>
  )
}
export default GameWrapper
