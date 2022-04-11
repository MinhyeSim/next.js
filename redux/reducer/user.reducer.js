import { createSlice } from "@reduxjs/toolkit"

export const UserDatePayload = {
    username: string,
    Password: string,
    name: string,
    telephone: string,
}

const initialState = {
    userLoading: false,
    userData: null,
    error: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state, action){ state.userLoading = true, state.error = null},
        joinsuccess(state, action){ state.userLoading = false, state.error = action.payload},
        joinFailure(state, action){ state.userLoading = false, state.error = action.payload}
    }
})

export default userSlice.reducer