import React, { useCallback, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'

import gameCoverImg from '../../../../../assets/background-game-over.png'
import restartButtonImg from '../../../../../assets/game-restart-button.png'
import useGameContext from '../../hooks/use-game-context'
import { useAppDispatch } from '../../../../../hooks/store'
import { setGameResult } from '../../../../../store/leaderboard'

type Props = {
  onGameOver: () => void
}

function GameOverScreen({ onGameOver }: Props) {
  const dispatch = useAppDispatch()
  const game = useGameContext()
  const score = game?.gameState?.score;
  useEffect(() => {
    if (score && score > 0) {
      dispatch(setGameResult(score))
    }
  }, [score])
  const handleGameOver = useCallback(() => {
    onGameOver()
  }, [onGameOver])

  if (!game) {
    return null
  }

  return (
    <Box
      sx={{
        width: '400px',
        height: '600px',
        position: 'relative',
        border: '1px solid black',
      }}>
      <img src={gameCoverImg} alt="game over" width={400} height={600} />
      <Typography
        variant="body1"
        sx={{
          position: 'absolute',
          top: '220px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'yellow',
        }}>
        Ваш счет
      </Typography>
      <Typography
        variant="body1"
        sx={{
          position: 'absolute',
          top: '283px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'yellow',
        }}>
        {score}
      </Typography>
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        data-testid="restartGame"
        type="button"
        onClick={handleGameOver}>
        <img src={restartButtonImg} alt="start" width={220} height={71} />
      </IconButton>
    </Box>
  )
}

export default GameOverScreen
