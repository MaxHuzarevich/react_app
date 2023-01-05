const SET_USER_DATA = 'SET_USER_DATA'

export const setAuthUserData = (data: dataType) => {
    return {
        type: SET_USER_DATA,
        data: data
    } as const
}

export type setAuthUSerDataType = ReturnType<typeof setAuthUserData>

export type dataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state:InitialStateType = initialState, action: setAuthUSerDataType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}