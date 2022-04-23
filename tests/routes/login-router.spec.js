class LoginRouter {
  route () {

  }
}

describe('Login router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_secret'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statuscode).toBe(400)
  })
})
