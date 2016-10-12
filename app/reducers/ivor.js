import * as types from '../actions/actionTypes';

export default function ivor(state = [], action = {}) {
    switch (action.type) {
        case types.INPUT:
            return {
                id: action.id,
                city: action.city,
                completed: false
            }
        default:
            return state;
    }
}