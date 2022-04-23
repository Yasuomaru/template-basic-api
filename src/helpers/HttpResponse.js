class HttpResponse {
  constructor (statusCode, statusMessage, body) {
    this.statusCode = statusCode
    this.statusMessage = statusMessage
    this.body = body
  }

  static badRequest () {
    return new HttpResponse(500, 'Internal server error', '')
  }
}

export default HttpResponse
