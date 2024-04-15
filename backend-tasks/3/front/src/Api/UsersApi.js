import axios from "axios";

export default class UsersApi {
    static async getAll() {
        try {
            const response = await axios.get('http://romashka-serv.ru/users');
            return response.data;

        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    static async postNewUser(user) {
        try {
            const response = await axios.post('http://romashka-serv.ru/add', {...user});
            console.log(response.status);
        }
        catch (e) {
            console.log(e);
        }
    }
}