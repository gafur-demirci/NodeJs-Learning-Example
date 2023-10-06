import { IProfileManager } from '../profile/IProfileManager';
import { IUserManager } from './IUserManager';
import { getUserById } from '../../controllers/User/UserController';

export class User implements IUserManager {
    id: String;
    profile: IProfileManager;

    /**
     * 
     */
    constructor(id: String, profile: IProfileManager) {
        this.id = id;
        this.profile = profile;
    }

    getUserById(id: String): User {
        return getUserById(id);
    }
}
