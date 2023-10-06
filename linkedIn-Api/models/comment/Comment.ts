import { getCommentById } from '../../controllers/Comment/CommentController';
import { IPostManager } from '../post/IPostManager';
import { IUserManager } from '../user/IUserManager';
import { ICommentManager } from './ICommentManager';

export class Comment implements ICommentManager {
    id: String;
    text: String;
    owner: IUserManager;
    post: IPostManager;

    /**
     *
     */
    constructor(
        id: String,
        text: String,
        owner: IUserManager,
        post: IPostManager
    ) {
        this.id = id;
        this.text = text;
        this.owner = owner;
        this.post = post;
    }

    getCommentById(id: String): Comment {
        return getCommentById(id);
    }
}