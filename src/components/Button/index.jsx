import React from 'react'

export const Button = React.createClass({
    render() {
        let { children:label, ...other } = this.props
        return(
            <button className="button" {...other}>{label}</button>
        )
    }
})
require('./button.scss')
