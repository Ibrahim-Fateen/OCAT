import Axios from '../utils/http.config';

export class loginService {
  static submit(credentials) {
    try {
      return Axios.post(`/users/login`, { credentials })
        .then(response => {
          if (response.data.token == 1) {
            localStorage.token = response.data.token;
            // check response is correct
          }
          return response.data.token;
        });
    }
    catch (err) {
      console.log(err.response);
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
