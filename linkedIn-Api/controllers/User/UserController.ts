import { Profile } from '../../models/profile/Profile';
import { User } from '../../models/user/User';

export function getUserById(id: String): User {
    // return from db given id
    return new User(id, new Profile('', 'name', 'surname')); // getUserByIdFromDb();
}