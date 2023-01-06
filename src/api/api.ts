import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '57a6b8c8-97c1-40c0-bb62-c0e1174be241'
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(
            `/users?page=${currentPage}&count=${pageSize}`,
        ).then(resp => {
            return resp.data
        })
    }
}
