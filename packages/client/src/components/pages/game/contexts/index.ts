import { createContext } from 'react'
import GameEngine from '../engine/game-engine'
import { Nullable } from '../../../../types'

export const CanvasContext = createContext<CanvasRenderingContext2D | null>(
  null
)
export const FrameContext = createContext<number>(0)

export const GameContext = createContext<Nullable<GameEngine>>(null)
