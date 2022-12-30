const getUserDevice = () => {
  return window.navigator.userAgent.split('/')[1]
}

export default getUserDevice
