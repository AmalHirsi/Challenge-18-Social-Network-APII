const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialsDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mongoose.set('debug', true);

module.exports = mongoose.connection;





