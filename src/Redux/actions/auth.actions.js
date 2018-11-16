export const AuthActions = {
  CONNECT : 'CONNECT',
  DISCONNECT : 'DISCONNECT'
}


export const connect = (private_key, public_key) => {
  return {
    type: AuthActions.CONNECT,
    auth: {
      privateKey: private_key,
      publicKey: public_key
    }
  }
}

export const disconnect = () => {
  return {
    type: AuthActions.DISCONNECT
  }
}
