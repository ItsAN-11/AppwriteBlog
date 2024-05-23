/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */

//  FUTURE PROOF PAGE FOR AUTHENTICATION :::::



import conf from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)               // Your API Endpoint
            .setProject(conf.appwriteProjectId);          // Your project ID
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //return userAccount   //call another method for direct login after creating login
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error){
            throw error;
        }
    }
    async login({email, password}) {
        try{
            return await this.account.createEmailSession(email, password)
        } catch(error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        } catch(error){
            console.log("Appwrite service :: logout :: error", error)
        }
    }

}




const authService = new AuthService();
export default authService