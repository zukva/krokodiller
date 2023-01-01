import React, { useRef, useState } from 'react'
import { Box, Button } from '@mui/material'

import Canvas from './components/canvas'
import Enemies from './components/enemies'
import Ship from './components/ship'
import ShipBullets from './components/ship-bullets'
import CollisionChecker from './components/collision-checker'
import EnemiesBullets from './components/enemies-bullets'
import Images from './components/images'
import GAME_SETTINGS from './game-settings'
import usePreloadedImagesRefs from './hooks/use-preloaded-images-refs'
import Background from './components/background/background'
import StartScreen from './components/start-screen'
import toggleFullscreen from '../../../utils/fullscreen-toggle'
import Score from './components/score'
import GameOverScreen from './components/game-over-screen'
import useGameContext from './hooks/use-game-context'
import MusicSwitcher from './components/music-switcher'

const { canvas } = GAME_SETTINGS

function Game() {
  const refs = usePreloadedImagesRefs()
  const gameRef = useRef<HTMLDivElement>(null)
  const game = useGameContext()
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [isNewGame, setIsNewGame] = useState<boolean>(true)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  const handleStopGame = () => {
    setIsStarted(false)
    game?.stop()
  }

  const handleRestartGame = () => {
    setIsStarted(true)
    game?.restart()
  }

  const handleStartGame = () => {
    setIsStarted(true)
    setIsNewGame(false)
    game?.start()
  }

  const handleClickFullScreenBtn = () => {
    toggleFullscreen(gameRef.current, setIsFullScreen)
  }

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
        ref={gameRef}>
        <Box
          sx={{
            position: 'relative',
          }}>
          <MusicSwitcher muteOnInit={GAME_SETTINGS.muteOnInit} />
          <Button
            sx={{
              position: 'fixed',
              bottom: '30px',
              right: '50px',
              zIndex: 1,
            }}
            variant="contained"
            onClick={handleClickFullScreenBtn}>
            {isFullScreen ? 'Обычный экран' : 'Полный экран'}
          </Button>
          {isNewGame && <StartScreen onStart={handleStartGame} />}
          {!isStarted && !isNewGame && (
            <GameOverScreen onGameOver={handleRestartGame} />
          )}
          <Images refs={refs} />
          {isStarted && (
            <Canvas
              width={canvas.width}
              height={canvas.height}
              isAnimating={isStarted}>
              <Score />
              <Enemies refs={refs} />
              <EnemiesBullets refs={refs} />
              <ShipBullets refs={refs} />
              <Ship
                isAnimating={isStarted}
                mainShipFullHealthRef={refs.mainShipFullHealthRef}
              />
              <Background refs={refs} />
              <CollisionChecker handleStopGame={handleStopGame} />
            </Canvas>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Game
