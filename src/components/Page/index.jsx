import React from 'react'

export const Page = React.createClass({
    render() {
        return(
            <div className="page">
                {this.props.children}
            </div>
        )
    }
})
require('./page.scss')
