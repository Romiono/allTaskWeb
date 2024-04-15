import axios from "axios";

// export async function fetchAll() {
//     try {
//         const response = await axios.get('http://localhost:3000/users');
//         return response.data;
//     }
//     catch (e) {
//         console.log(e);
//         return null;
//     }
// }

// export const newUser = async (user) => {
//     try {
//         const response = await axios.post('http://localhost:3000', {...user});
//         console.log(response.status);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

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