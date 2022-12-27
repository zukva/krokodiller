import React from 'react'
import { Box, IconButton } from '@mui/material'

import gameCoverImg from '../../../../../assets/game-cover.png'
import startButtonImg from '../../../../../assets/game-start-button.png'

type Props = {
  onStart: () => void
}

function StartScreen({ onStart }: Props) {
  const handleStart = () => {
    onStart()
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
      <img src={gameCoverImg} alt="space runner" width={400} height={600} />
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '100px',
        }}
        data-testid="startGame"
        type="button"
        onClick={handleStart}>
        <img src={startButtonImg} alt="start" width={200} height={82} />
      </IconButton>
    </Box>
  )
}

export default StartScreen
