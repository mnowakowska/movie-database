import { authApiClient } from './apiClient.js';


class MediaApi {
    static searchMedia(query) {
        const params = {
            q: query,
        };
        return authApiClient().get(
            'moviedb/search',
            {
                params,
            }
        ).then(response => {
            return response.data;
        }).catch(error => {
            throw(error);
        });
    }
}

export default MediaApi;
