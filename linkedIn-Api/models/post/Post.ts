import { getPostById } from "../../controllers/Post/PostController";
import { ILikeManager } from "../like/ILikeManager";
import { IUserManager } from "../user/IUserManager";
import { IPostManager } from "./IPostManager";

export class Post implements IPostManager{
    id: String;
    text: String;
    url: String;
    image?: String | undefined;
    owner: IUserManager;
    like: ILikeManager;

    /**
     *
     */
    constructor(id: String) {
        this.id = id;
        
    }

    getPostById(id: String): Post{
        return getPostById(id);
    }
    
}