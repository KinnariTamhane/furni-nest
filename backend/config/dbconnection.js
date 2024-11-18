const mongoose = require("mongoose");

const uri = "mongodb+srv://kinnari123:admin123@kinnaricluster.njse3tl.mongodb.net/?retryWrites=true&w=majority&appName=kinnariCluster";

const connect = async() => {
    try{
        const connectToDB = await  mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
        })
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.error('Database connection error:', err));
        mongoose.set('bufferCommands', false);
        // mongoose.set('debug', true);
    }
    catch(e){
        console.log("error", e);
    }
}

module.exports = connect;
