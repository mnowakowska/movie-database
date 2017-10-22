import axios from 'axios';

const URL = 'http://localhost:8000/api/';



class UserApi {
    static authUser(username, password) {
        return axios.post(
            URL + 'user/auth',
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
}

export default UserApi;
