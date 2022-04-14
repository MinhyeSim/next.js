import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface JoinPayload{
    data:{
        user: {
            userid: string;
            password: string;  
            email: string;
            name: string;  
            phone: string;
            birth: string;
            address: string;
        }
    }
}

// state
export interface UserState{
    userLoading: boolean;
    userData: any;
    error: any;
    token: null;
}


const initialState: UserState = {
    userLoading: false,
    userData: null,
    error: null,
    token: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, action){ state.userLoading = true, state.error = null},
        joinSuccess(state, action){ state.userLoading = false, state.error = action.payload},
        joinFailure(state, action){ state.userLoading = false, state.error = action.payload}
    }
})
const { reducer, actions } = userSlice
export const {
    joinRequest, joinSuccess, joinFailure
} = actions
export default reducer