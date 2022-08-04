/* eslint-disable no-param-reassign */
/*
 * Dashboard Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 */

import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";

// The initial state of the ReposManager container
export const initialState = {
    data: [],
    loading: false,
    error: false,
    singleUser: null,
};

const dashboardSlice = createSlice({
    name: "dashboardSlice",
    initialState,
    reducers: {
        fetchSuccess(state, action) {
            state.data = action.payload.data;
            state.loading = false;
            console.log("Value Updated in Reducer\n", state.data.first_name);
        },
        saveUsers() {console.log("Action Called in Reducer\n");},
    },
});

export const { name, actions, reducer } = dashboardSlice;
