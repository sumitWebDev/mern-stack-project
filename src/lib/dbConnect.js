import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject = {}

//the function name can be anything
export default async function dbConnect(): Promise<void>{

    //this is where we are checking if DB is connected
    if(connection.isConnected){
        console.log("Already Connected")
        return
    }

    try{
       const db =  await mongoose.connect(process.env.MONGODB_URL || '',{})

       console.log(db);
       connection.isConnected = db.connection[0].readyState

       console.log('Db connected successfully')
    } catch (error){
            console.log("Db connection failed",error)
            process.exit(1)
    }
}