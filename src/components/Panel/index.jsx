import React from 'react'

export const Panel = React.createClass({
    render() {
        let title = null
        if(this.props.title) {
            title = (
                <h3 className="panel__title">{this.props.title}</h3>
            )
        }
        return(
            <div className="panel">
                {title}
                <div className="panel__contents">
                    {this.props.children}
                </div>
            </div>
        )
    }
})
require('./panel.scss')
