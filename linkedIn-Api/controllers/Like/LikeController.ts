import { Like } from '../../models/like/Like';
import { Post } from '../../models/post/Post';
import { Profile } from '../../models/profile/Profile';
import { User } from '../../models/user/User';

export function getLikeById(id: String): Like {
    return new Like(
        id,
        new User(id, new Profile(id, 'name', 'surname')),
        new Post(id),
        'Beğen'
    );
}