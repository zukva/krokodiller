import { useContext } from 'react'
import { GameContext } from '../contexts'

const useGameContext = () => {
  return useContext(GameContext)
}

export default useGameContext
