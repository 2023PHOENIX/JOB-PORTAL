const  mongoose  = require('mongoose');
const connectToMongoDB = async () => {
    try {
        
        const response = await mongoose.connect(process.env.MONGODB_URL, {
            dbName : process.env.dbName
        })
        if (response) {
            console.log("connected successfully to mongodb");
        }
    } catch (e) {
        console.error("something went wrong", e.message);
    }
}


module.exports = {
    connectToMongoDB,
}