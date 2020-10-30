'use strict'
const User = use('App/Models/User');
class UserController {
  async createUser ({ request, response,auth }) {
    try {
      // getting data passed within the request
      const data = request.only(['username', 'email', 'password']);

      // looking for user in database
      const userExists = await User.findBy('username', data.username);

      // if user exists don't save
      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: 'User already registered' } })
      }

      // if user doesn't exist, proceeds with saving him in DB
      const user = await User.create(data);

      return response.tok
    } catch (error) {
      return response
        .status(error.status)
        .send(error)
    }
  }
  async login({request, auth, response}) {
    const {email, password} = request.all();
    let token = await auth.attempt(email, password);
    return response.status(200).json({data: token, message: 'Login successfull', status: true});
  }
}
module.exports = UserController;
