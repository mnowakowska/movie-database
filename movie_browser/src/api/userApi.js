import { apiClient, authApiClient } from './apiClient.js';


class UserApi {
    static authUser(username, password) {
        return apiClient().post(
            'user/auth',
            {
                username,
                password,
            }
        ).then(response => {
            return response.data;
        }).catch(error => {
            throw(error);
        });
    }

    static addFavorite(media) {
        debugger;
        return authApiClient().post(
            'user/favorite',
            {
                media_type: media.media_type,
                media_name: media.name || media.original_name || media.original_title,
                media_id: media.id,
                media_overview: media.overview,
                poster_path: media.poster_path,
            }
        ).then(response => {
            return response.data;
        }).catch(error => {
            throw(error);
        });
    }

    static getFavorite() {
        return authApiClient().get(
            'user/favorite',
        ).then(response => {
            return response.data;
        }).catch(error => {
            throw(error);
        });
    }
}

export default UserApi;
