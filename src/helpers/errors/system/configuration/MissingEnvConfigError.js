class MissingEnvConfigError extends Error {
  constructor () {
    super('Missing environment configuration')
    this.name = 'MissingEnvConfigError'
  }
}

export default MissingEnvConfigError
