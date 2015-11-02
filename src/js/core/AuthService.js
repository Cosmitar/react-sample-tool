'use strict'
class AuthService {
    static login( usr, pass ){
        let checkStatus = (response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }

        let parseJSON = (response) => {
            return response.json();
        }

        //hack for demo
        return new Promise((resolve) => {
            resolve(
                { user: { id: 1, name: 'demo' } }
            );
        });
        /*
        return fetch(_url, {
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            body: {user:usr,password:pass}
        }).then(checkStatus)
        .then(parseJSON);*/
    }

}

export default AuthService;