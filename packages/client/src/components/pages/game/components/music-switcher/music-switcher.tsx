import { useCallback, useState } from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import useGameContext from '../../hooks/use-game-context'

const styles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 1,
  cursor: 'pointer',
}

type Props = {
  muteOnInit: boolean
}
function MusicSwitcher({ muteOnInit }: Props) {
  const [mute, setMute] = useState(muteOnInit)
  const game = useGameContext()
  const handleSwitch = useCallback(() => {
    if (mute) {
      game?.unMuteMusic()
    } else {
      game?.muteMusic()
    }
    setMute(!mute)
  }, [mute])

  return mute ? (
    <MusicOffIcon sx={styles} color="error" onClick={handleSwitch} />
  ) : (
    <MusicNoteIcon color="error" sx={styles} onClick={handleSwitch} />
  )
}

export default MusicSwitcher
