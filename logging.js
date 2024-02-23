function Logging() {
  return function (payload) {
    switch(payload.message.system) {
      default:
        console.log(payload.message)
    }
  }
}

export { Logging }