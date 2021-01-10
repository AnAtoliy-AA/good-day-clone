 const config = require('./config.env')

const mongoURI = `mongodb+srv://${config.login}:${config.password}@cluster0.b9kug.mongodb.net/<dbname>?retryWrites=true&w=majority`
const jwt = 'dev-jwt'

exports.mongoURI = mongoURI
exports.jwt = jwt