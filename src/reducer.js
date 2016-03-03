import { Map, fromJS } from 'immutable'
import * as types from './constants/actionTypes'
export const INITIAL_STATE = Map()

export const main = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.VALUE_CHANGED:
            return state.withMutations(map => {
                map.setIn([ 'values', action.id ],action.value)
                .deleteIn([ 'errors', action.id ])
            })
        case types.SENDING_LOGIN:
            return state.withMutations(map => {
                map.set('processing',true)
                    .delete('errors')
                    .delete('hasErrors')
                    .delete('loginInfo')
                    .delete('loginFailed')
            })
        case types.SUCCESSFULLY_LOGGED_IN:
            return state.withMutations(map => {
                map.delete('processing')
                    .set('loginInfo',action.message)
                    .set('loginFailed',false)
            })
        case types.INVALID_FIELDS:
            return state.withMutations(map => {
                map.set('errors',fromJS(action.errors))
                   .set('hasErrors',true)
            })
        case types.LOGIN_FAILED:
            return state.withMutations(map => {
                map.delete('processing')
                    .set('loginInfo',action.message)
                    .set('loginFailed',true)
            })
    }
    return state
}
export default main
