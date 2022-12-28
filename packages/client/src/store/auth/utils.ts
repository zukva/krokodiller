import { RoutesList } from '../../routes/routesList'

export const isUnprotectedPathname = (pathname: string) => {
  return (
    pathname === RoutesList.RegisterPage || pathname === RoutesList.LoginPage
  )
}
