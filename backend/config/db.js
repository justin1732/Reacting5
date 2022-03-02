const mongoose = require ('mongoose')
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";


const connectDB = async() => {
try { const conn = await mongoose.connect(MONGODB_URI)
console.log(`MongoDB Connected at ${conn.connection.host}`.cyan.underline)
} catch(error){
    console.log(error)
    process.exit(1)

}

}

module.exports = connectDB