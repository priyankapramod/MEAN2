const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    User.findOne({ email: request.body.email })
      .then(user => {
        if (!user) { throw new Error(); }

        return User.validatePassword(request.body.password, user.password)
                .then(() => {
                  // complete login
                  completeLogin(request, response, user);
                });
      })
      .catch(error => {
        response.status(401).json('Email/password combo not found');
      });
  },
  logout(request, response) {
    console.log('loggin out server side');

    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');
    response.json(true);
  },
  register(request, response) {
    User.create(request.body)
      .then(user => {
        // complete login
        completeLogin(request, response, user);
      })
      .catch(error => {
        response.status(422)
          .json(Object.keys(error.errors).map(key => error.errors[key].message))
      });
  },
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();

  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 864000 * 1000);
  response.json(user);
}
