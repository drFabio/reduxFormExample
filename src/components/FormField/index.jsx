import React from 'react'
import { connect } from 'react-redux'
import { FlashMessage } from '../FlashMessage'
import { VALUE_CHANGED } from '../../constants/actionTypes'
const FormFieldDisplay = React.createClass({
    render() {
        let { id, 
            errors , 
            hasErrors,
            type,
            children:label,
             ...otherProps } = this.props
        let className = 'formField'
        let messages = null
        if(hasErrors) {
            className+= ' formField--error'
            messages = (
                <FlashMessage messageLevel="error">{errors}</FlashMessage>
            )
        }
        return(
            <div className={className}>
                {messages}
                <label htmlFor={id} className="formField__label"><span className="formField__label__text">{label}</span></label>
                <input className="formField__input" type={type}  id={id}  onChange={this.handleChange} {...otherProps}/>
            </div>
        )
    },
    handleChange(e) {
        this.props.onValueChange(e.target.value)
    }
})

const mapStateToProps = (state,ownProps) =>{
    const errors = state.getIn([ 'errors', ownProps.id ],false)

    return {
        errors,
        hasErrors:!!errors
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        onValueChange(value) {
            dispatch({ type:VALUE_CHANGED, 'value':value, 'id':ownProps.id })
        }
    }
}
export const FormField = connect(mapStateToProps, mapDispatchToProps)(FormFieldDisplay)
require('./formField.scss')
