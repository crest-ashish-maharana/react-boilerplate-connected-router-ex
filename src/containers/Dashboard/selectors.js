import { createSelector } from 'reselect';
import { name, initialState } from './slice';

/**
 * Direct selector to the Dashboard state domain
 */

const selectUsers = (state) => state[name] || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */

const makeUsers = () =>
    createSelector(selectUsers, (substate) => substate);
const makeSelectErrors = () => createSelector(selectUsers, (state) => state.error);
const makeSelectSingleUser = () => createSelector(selectUsers, (state) => state.singleUser);

export default makeUsers;
export { selectUsers, makeSelectErrors, makeSelectSingleUser };
