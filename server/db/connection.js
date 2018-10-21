const monk = require('monk');
const connectionString = 'localhost/quotes';
const db = monk(connectionString)
module.exports = db;