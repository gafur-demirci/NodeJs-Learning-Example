import { getLikeById } from '../../controllers/Like/LikeController';
import { IPostManager } from '../post/IPostManager';
import { IUserManager } from '../user/IUserManager';
import { ILikeManager } from './ILikeManager';
import { LikeType } from './LikeType';

export class Like implements ILikeManager {
    id: String;
    user: IUserManager;
    post: IPostManager;
    likeType: LikeType;

    /**
     *
     */
    constructor(
        id: String,
        user: IUserManager,
        post: IPostManager,
        likeType: LikeType
    ) {
        this.id = id;
        this.user = user;
        this.post = post;
        this.likeType = likeType;
    }

    getLikeById(id: String): Like {
        return getLikeById(id);
    }
}