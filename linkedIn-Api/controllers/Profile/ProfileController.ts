import { Profile } from '../../models/profile/Profile';

export function getProfileById(id: String): Profile {
    return new Profile('', '', '');
}