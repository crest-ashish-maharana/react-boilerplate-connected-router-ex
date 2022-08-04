/**
 *
 * Saga for Dashboard
 *
 */

import { takeEvery, call, put } from "redux-saga/effects";
import { actions } from "./slice";
import * as api from "./api";
import {toast} from "react-toastify";
import history from "../../utils/history";

export function* saveUsers({ payload }) {
    try {
        console.log('Saga Called\n', payload);
        // const data = yield call(api.saveUsers, payload);
        yield put(actions.fetchSuccess({ data: payload }));
        // history.push('/');
        // toast.success('User fetched successfully')
        // setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
        console.log(error);
    }
}

// Individual exports for testing
export default function* dashboardSaga() {
    yield takeEvery(actions.saveUsers.type, saveUsers);
}
