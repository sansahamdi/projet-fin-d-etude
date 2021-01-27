const jwt = require('jsonwebtoken');
const config = require('config');

const auth = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(400).send([{ msg: 'no token' }]);
  }

  try {
    const decoded = jwt.verify(token, config.get('tokenSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(500).send([{ msg: 'token not valid' }]);
  }
};

module.exports = auth;
