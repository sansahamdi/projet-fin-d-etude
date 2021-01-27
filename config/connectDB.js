const mongoose = require('mongoose');
const config = require('config');

const connect = () => {
  mongoose
    .connect(config.get('mongoURI'), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false ,
    })
    .then(() => console.log('Connected on mongoDB'))
    .catch((err) => console.error(err));
};

module.exports = connect;
