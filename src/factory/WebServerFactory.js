import MissingEnvConfigError from '../helpers/errors/system/configuration/MissingEnvConfigError'

class WebServerFactory {
  constructor () {
    if (!process.env.WEB_SERVER_LIB) {
      throw new MissingEnvConfigError()
    }
  }
}

export default WebServerFactory
