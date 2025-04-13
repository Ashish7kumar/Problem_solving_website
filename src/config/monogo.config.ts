import { MongoClient } from "mongodb";
import {DATABASE_URL} from "./server.config.js"


  async function DbConnection() {
    try{
       
        const uri=DATABASE_URL as string;
       await MongoClient.connect(uri);
    }
    catch(e)
    {  
        console.log(e);
        throw(e);
    }
  }
export default DbConnection;
