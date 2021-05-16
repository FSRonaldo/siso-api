export class MissingParamError extends Error {
  constructor (paramNeme: string) {
    super(`Missing param ${paramNeme}`)
    this.name = 'MissingParamError'
  }
}
