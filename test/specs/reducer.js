import expect from 'expect'
import { INITIAL_STATE,main } from '../../src/reducer'
import * as types from '../../src/constants/actionTypes'
import { fromJS } from 'immutable'

// VALUE_CHANGED
// SENDING_LOGIN
// SUCCESSFULLY_LOGGED_IN
// INVALID_FIELDS
// LOGIN_FAILED
describe('Reducer', () => {
    it('Register the value by id on change',()=>{
        const id = 'some_id'
        const value = 'foo'
        const action = { id, value, type: types.VALUE_CHANGED }
        const newState = main(INITIAL_STATE, action)
        expect(newState.getIn([ 'values', id ])).toBe(value)
    })
    it('Set as processing and clear erros when login is send ', ()=>{
        const state = fromJS({
            errors:'foo',
            hasErrors:'foo',
            loginInfo:'foo',
            loginFailed:'foo'
        })
        const action = { type: types.SENDING_LOGIN }
        const newState = main(state, action)
        expect(newState.get('processing')).toBe(true)
        expect(newState.get('errors')).toNotExist()
        expect(newState.get('hasErrors')).toNotExist()
        expect(newState.get('loginInfo')).toNotExist()
        expect(newState.get('loginFailed')).toNotExist()
    })
    it('Set the info message on sucessfull login', ()=>{
        const state = fromJS({
            processing:true
        })
        const message = 'some message'
        const action = { type:types.SUCCESSFULLY_LOGGED_IN, message }
        const newState = main(state, action)
        expect(newState.get('processing')).toNotExist()
        expect(newState.get('loginFailed')).toBe(false)
        expect(newState.get('loginInfo')).toBe(message)
    })
    it('Set errors when the fields are invalid', ()=>{
        const errors = { 'foo':'bar' }
        const action = { errors, type: types.INVALID_FIELDS }
        const newState = main(INITIAL_STATE, action)
        expect(newState.get('hasErrors')).toBe(true)
        expect(newState.getIn([ 'errors', 'foo' ])).toEqual('bar')

    })
    it('Set the message on failed login ', ()=>{
        const message = 'some message'
        const action = { type: types.LOGIN_FAILED,message }
        const newState = main(INITIAL_STATE, action)
        expect(newState.get('processing')).toNotExist()
        expect(newState.get('loginFailed')).toBe(true)
        expect(newState.get('loginInfo')).toBe(message)
    })
})

