const mongoose = require('mongoose');
const debug = require('debug')('data');

module.exports  = mongoose.connect('mongodb://localhost:5124')
 .then(() => debug(`Connected Successfully To exam DB`))
 .catch((err) => debug('Failed To Connect To exam DB...', err))