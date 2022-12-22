import { FC } from 'react'
import MuiLink from '@mui/material/Link'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

export const Link: FC<LinkProps> = props => {
  return <MuiLink component={RouterLink} {...props} />
}
