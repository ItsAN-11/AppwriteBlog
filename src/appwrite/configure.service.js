/* eslint-disable no-unused-vars */
import conf from "../config/config";
import { Client, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)               // Your API Endpoint
            .setProject(conf.appwriteProjectId);          // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featured_Image, status, user_Id}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featured_Image,
                    status,
                    user_Id
                }
        )
        } catch (error){
            return console.log("Apprite service :: Database service error :: createPost error:: error", error)
        }
    }

    async updatePost(slug,{title,  content, featured_Image, status}) {
        try{
            return this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featured_Image,
                    status,
                }
            )
        } catch (error) {
            return console.log("Apprite service :: Database service error :: updatePost error:: error", error)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            )
            return true
        } catch (error) {
            console.log("Apprite service :: Database service error :: deletePost error:: error", error)
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch(error) {
            console.log("Apprite service :: Database service error :: getPost error:: error", error)
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                "100",
                "0"
            )
        } catch (error) {
            console.log("Apprite service :: Database service error :: getPosts error:: error", error)
            return false
        }
    }

    //file upload method /service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Apprite service :: Database service error :: uploadFile error:: error", error)
            return false
        }
    }

    //file deletion method/service
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Apprite service :: Database service error :: deleteFile error:: error", error)
            return false
        }
    }

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteUrl,
            fileId
        )
}
}

const service = new Service();
export default service;