import { Themes } from '../enums/themes'
import { useAppDispatch } from './store'
import { setTheme } from '../store/theme'
import isServerSide from '../utils/isServerSide'

const useInitTheme = () => {
  const dispatch = useAppDispatch()

  if (isServerSide()) {
    return;
  }

  const initTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Themes.DarkTheme
    : Themes.LightTheme

  dispatch(setTheme(initTheme));
}

export default useInitTheme;
