let initId = 0;
import * as types from './actionTypes';

export function input(city) {
    return {
        type: types.INPUT,
        id: initId++,
        city
    };
}

export function remove(id) {
    return {
        type: types.REMOVE,
        id
    };
}