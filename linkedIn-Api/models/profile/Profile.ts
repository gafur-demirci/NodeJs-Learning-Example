import { getProfileById } from '../../controllers/Profile/ProfileController';
import { IProfileManager } from './IProfileManager';

export class Profile implements IProfileManager {
    id: String;
    name: String;
    surname: String;
    userImage?: String | undefined;
    hobies?: String[] | undefined;

    /**
     *
     */
    constructor(
        id: String,
        name: String,
        surname: String,
        userImage?,
        hobies?
    ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.userImage = userImage ? userImage : undefined;
        this.hobies = hobies;
    }

    getProfileById(id: String): Profile {
        return getProfileById(id);
    }
}