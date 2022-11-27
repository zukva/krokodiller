import APIAuth from '../api/APIAuth';

export enum AuthActions {
  Signup = 'signup',
  Signin = 'signin',
  GetUser = 'getUser',
  Logout = 'logout'
}

export const signin = (data) => {
  return (dispatch) => {
    return APIAuth.signin(data)
      .then(({ data }) => {
        console.log(data);
        console.log(dispatch); // TODO: диспатчить нормальные действия
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const getUser = () => {
  return (dispatch) => {
    return APIAuth.getUser()
      .then(({ data }) => {
        console.log(data);
        console.log(dispatch); // TODO: диспатчить нормальные действия
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
