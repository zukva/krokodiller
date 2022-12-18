import MuiLink from '@mui/material/Link'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { FC } from 'react'

export const Link: FC<LinkProps> = props => {
  return <MuiLink component={RouterLink} {...props} />
}
