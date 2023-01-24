import React, { useEffect, useRef } from 'react'
import GAME_SETTINGS from '../../game-settings'
const { canvas } = GAME_SETTINGS
import { useCanvas, useAnimation } from '../../hooks'
import useGameContext from '../../hooks/use-game-context'

type Props = {
  isAnimating: boolean
  mainShipFullHealthRef: React.RefObject<CanvasImageSource>
}

function Ship({ isAnimating, mainShipFullHealthRef }: Props) {
  const context = useCanvas()
  const game = useGameContext()
  const isControl = useRef<boolean>(false)
  const initialXClick = useRef<number | null>(null)
  const delta = useRef<number>(0)

  const animatedXPosition = useAnimation(
    0,
    () =>  delta.current
  )

  const handleMouseDown = (event: MouseEvent) => {
    isControl.current = true
    initialXClick.current = event.clientX
  }

  const isShipInCanvas = (event: MouseEvent)=>{
    return game ?!(game.gameState.ship.x + event.movementX <=0 ||
      game.gameState.ship.x + event.movementX+ game.gameState.ship.width >= canvas.width ||
      game.gameState.ship.y + event.movementY+ game.gameState.ship.height > canvas.height ||
      game.gameState.ship.y + event.movementY < canvas.height/2
    ) : false
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isControl.current && isAnimating ) {
      delta.current = game!.gameState.ship.x + event.movementX
      if(!isShipInCanvas(event)){return}
      game?.gameState.ship.setCoord(
        game!.gameState.ship.x + event.movementX,
        game.gameState.ship.y + event.movementY
      )
    }
  }

  const handleMouseUp = () => {
    isControl.current = false
    initialXClick.current = null
  }
  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isAnimating])

  if (context !== null && mainShipFullHealthRef.current !== null && game) {
    context.fillStyle = 'red'
    context.drawImage(
      mainShipFullHealthRef.current,
      animatedXPosition,
      game.gameState.ship.y,
      game.gameState.ship.width,
      game.gameState.ship.height
    )
  }

  return null
}

export default Ship
