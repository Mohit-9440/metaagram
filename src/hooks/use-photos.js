import { useState, useEffect} from 'react';
import { getPhotos} from '../services/firebase';

export default function usePhotos(user) {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        async function getTimelinePhotos() {
            if (user?.following?.length >= 1) {
                const followedUserPhotos = await getPhotos(user.userId, user.following);
                
                // rearranging array to sort newest photos first by dateCreated
                followedUserPhotos.sort((a, b) => b.dateCreated - a.dataCreated);
                setPhotos(followedUserPhotos);
            }
        }

        getTimelinePhotos();
    }, [user.following, user.userId]);

    return { photos };
}