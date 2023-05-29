import {getAuthUserData} from "./auth-reducer";

const INITIALIZED = 'INITIALIZED'

const InitializedAC = () => {
    return {
        type: INITIALIZED,
    } as const
}

export type InitializedACType = ReturnType<typeof InitializedAC>

type initialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const AppReducer = (state:initialStateType = initialState, action: InitializedACType) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(InitializedAC())
    })
}
