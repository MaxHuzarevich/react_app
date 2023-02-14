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
        }).catch(error => console.warn(error))
    },
    follow(userID: number) {
        return instance.post(`/follow/${userID}`)
    },
    unfollow(userID: number) {
        return instance.delete(`/follow/${userID}`)
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`/profile/` + userID)
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(
            `/auth/me`)
    }
}
