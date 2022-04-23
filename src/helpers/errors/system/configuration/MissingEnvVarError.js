class MissingEnvVarError extends Error {
  constructor (missingEnvVarErrorName) {
    super(`Missing environment variable in configuration: ${missingEnvVarErrorName}`)
    this.name = 'MissingEnvVarError'
  }
}

export default MissingEnvVarError
