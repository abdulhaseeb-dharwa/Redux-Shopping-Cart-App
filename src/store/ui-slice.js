import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { notification: null },
    reducers:{
        showNotification(state, action){
            state.notification = {
                type: action.payload.type,
                open: action.payload.open,
                message: action.payload.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;