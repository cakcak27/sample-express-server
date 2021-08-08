const url = 'mongodb+srv://admin123:a0XxuC0DwImlZc1W@pengelolaansampahcluste.rht38.mongodb.net/pengelolaansampahdb?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose;
db.url = url;

db.user = require("./user.model")(mongoose);
db.role = require("./role.model")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

db.tutorials = require('./tutorial.model.js')(mongoose);
module.exports = db;