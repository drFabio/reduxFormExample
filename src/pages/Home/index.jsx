import { Page, Panel, FormField, Button, FlashMessage } from '../../components'
import React from 'react'
import { connect } from 'react-redux'
import { login, validate } from './actions'

const App = React.createClass({
    shouldComponentUpdate: function ( nextProps ) {
        //Do not update on email and password value changes
        return nextProps.buttonDisabled !== this.props.buttonDisabled 
            || nextProps.loginInfo !== this.props.loginInfo
    },
    render() {
        let infoMessage = null
        if(this.props.loginInfo) {
            const messageLevel = this.props.loginFailed ? 'error':'success'
            infoMessage = (
                <FlashMessage messageLevel={messageLevel}>{this.props.loginInfo}</FlashMessage>
            )
        }
        return (
            <Page >
                <Panel title="Login">
                    {infoMessage}
                    <FormField name="email" type="text" id="email"  placeholder="Your email">
                        Email
                    </FormField>
                    <FormField name="password" type="password" id="password" placeholder="Your password">
                        Password
                    </FormField>
                    <Button onClick={this.clicked} disabled={this.props.buttonDisabled}>Send</Button>
                </Panel>
            </Page>
        )
    },
    clicked(e) {
        e.preventDefault()
        this.props.onSend(this.props.emailValue, this.props.passwordValue)
    }
})


const mapStateToProps = (state) => {
    const stateProps = {
        emailValue: state.getIn([ 'values', 'email' ]),
        passwordValue:  state.getIn([ 'values', 'password' ]),
        buttonDisabled:  state.get('processing',false),
        loginInfo: state.get('loginInfo',false),
        loginFailed: state.get('loginFailed',false)
    }
    return stateProps
}

const mapDispatchToProps =  (dispatch)=>{
    return {
        onSend: (email, password)=>{ 
           
            const errorState = validate(email,password)
            if(errorState) {
                dispatch(errorState)
                return
            }
            dispatch(login(email,password))
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(App)
