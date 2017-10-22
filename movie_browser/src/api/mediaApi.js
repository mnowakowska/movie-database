import { authApiClient } from './apiClient.js';


class MediaApi {
    static searchMedia(query, page) {
        const params = {
            q: query,
            page,
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
