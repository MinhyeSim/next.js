import { createSlice } from "@reduxjs/toolkit"
import { boolean } from "yup";
// parameter

// payload
export interface UserType{
        userid: string;
        password: string;  
        email: string;
        name: string;  
        phone: string;
        birth: string;
        address: string;
}

// state
export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const interface: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload){alert('진행 2: 리듀서 내부') state.loading = true},
        joinSuccess(state, UserState, {payload}){state.data = [...state.data, payload] state.loading = false},
        joinFailure(state, UserState,{payload}){state.data = payload; state.loading = false},
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer