import expect from 'expect'
import { validate } from '../../../src/pages/Home/actions'
import { INVALID_FIELDS }  from '../../../src/constants/actionTypes'
import * as msg from '../../../src/constants/messages'

const VALID_PASS = 'some_password_with_more_than-8'
const VALID_EMAIL ='foo@bar.baz'
const INVALID_EMAIL = 'not_an_email'
const INVALID_PASS = 'short'

describe('Actions ',()=>{
    describe('Validation', () => {
        it('Requires an email', () => {
            const response = validate(null, VALID_PASS)
            expect(response.type).toEqual(INVALID_FIELDS)
            expect(response.errors.email).toEqual(msg.EMAIL_REQUIRED)
            expect(response.errors.password).toNotExist()
        })

        it('Does not allows an invalid email ', () => {
            const response = validate(INVALID_EMAIL, VALID_PASS)
            expect(response.type).toEqual(INVALID_FIELDS)
            expect(response.errors.email).toEqual(msg.EMAIL_NOT_AN_EMAIL)
            expect(response.errors.password).toNotExist()

        })
        it('Does not allow an empty password', () => {
            const response = validate(VALID_EMAIL, null)
            expect(response.type).toEqual(INVALID_FIELDS)
            expect(response.errors.password).toEqual(msg.PASSWORD_REQUIRED)
            expect(response.errors.email).toNotExist()
        })
        it('Does not allow a short password ',()=>{
            const response = validate(VALID_EMAIL, INVALID_PASS)
            expect(response.type).toEqual(INVALID_FIELDS)
            expect(response.errors.password).toEqual(msg.PASSWORD_LENGTH)
            expect(response.errors.email).toNotExist()
        })
        it('Allows valid email and password', ()=>{
            const response = validate(VALID_EMAIL, VALID_PASS)
            expect(response).toBe(false)
        })
    })
})
