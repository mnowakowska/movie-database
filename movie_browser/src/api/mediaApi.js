import axios from 'axios';

const URL = 'http://localhost:8000/api/';



class MediaApi {
    static searchMedia(query) {
        return axios.get(
            URL + 'moviedb/search',
            {
                params : {
                    q: query,
                }
            }
        ).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }
}

export default MediaApi;
