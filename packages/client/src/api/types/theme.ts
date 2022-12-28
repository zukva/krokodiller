import { Themes } from '../../enums/themes'

export type SetUserThemeData = {
  userId: number;
  device: string;
  theme: string;
}

export type GetUserThemeData = {
  userId: number;
  device: string;
}

export type UserTheme = {
  theme: Themes;
}
