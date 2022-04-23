const WebServerFactory = require('./WebServerFactory.js')

class WebServer {
  construtor () {
    this.app = this.createWebServer()

    this.configureDB()
    this.configureMiddlewares()
    this.configureRouter()
  }

  createWebServer () {
    console.info('Creating web server')

    return WebServerFactory.create()
  }

  configureDB () {
    console.info('Configuring database access')
  }

  configureMiddlewares () {
    console.info('Configuring middlewares')
  }

  configureRouter () {
    console.info('Configuring routes')
  }
}

const webServerInstance = new WebServer()

export default webServerInstance
