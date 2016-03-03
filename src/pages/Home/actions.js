const emailRegex = /\S+@\S+\.\S+/
import { LOGIN_FAILED ,SUCCESSFULLY_LOGGED_IN, INVALID_FIELDS, SENDING_LOGIN }  from '../../constants/actionTypes'
import * as msg from '../../constants/messages'

export const validate = (email, password) =>{
    const errors = { 'email':false, 'password':false }
    if(!email) {
        errors.email = msg.EMAIL_REQUIRED
    }
    else if (!emailRegex.test(email)) {
        errors.email = msg.EMAIL_NOT_AN_EMAIL
    }
    if(!password) {
        errors.password = msg.PASSWORD_REQUIRED
    }
    else if(password.length < 8) {
        errors.password = msg.PASSWORD_LENGTH
    }
    if(!errors.password.length  && !errors.email.length ) {
        return false
    }
    return { type:INVALID_FIELDS, errors }
}

export const login = ( email, password ) =>{
    return ( dispatch ) => {
        dispatch({ type:SENDING_LOGIN })
        //Mocking a HTTP request
        setTimeout(()=>{ 
            if(password==='password') {
                const message = msg.UNABLE_TO_LOGIN
                dispatch( { type:LOGIN_FAILED, message } )
                return
            }
            const message = msg.SUCESSFULLY_LOGIN
            dispatch( { type:SUCCESSFULLY_LOGGED_IN, message } )

        }, 800)
    }
}
