const mognoose = require('mongoose')

const dbUser = process.env.dbUser
const dbPass = process.env.dbPass

const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.aqvw7.mongodb.net/coca-cola?retryWrites=true&w=majority`

mognoose.connect(url, {
    useNewUrlParser: true,
})

// const MongoClient = mongodb.MongoClient
// const url = 'mongodb://localhost:27017'
// let getClient = (callback) => {
//     MongoClient.connect(url, (err, client) => {
//         if (err) return console.log('Error de conexion')
//         const db = client.db('coca-cola')
//         return callback(db)
//     })
// }
// module.exports = getClient
