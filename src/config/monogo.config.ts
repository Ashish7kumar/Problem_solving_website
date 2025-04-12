import { MongoClient } from "mongodb";
import { MongoDbUser,MongoDbPassword } from "./server.config.js";


  async function DbConnection() {
    try{
       
        const uri =
        `mongodb+srv://${MongoDbUser}:${MongoDbPassword}@cluster0.x8to42s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

       await MongoClient.connect(uri);
    }
    catch(e)
    {  
        console.log(e);
        throw(e);
    }
  }
export default DbConnection;
