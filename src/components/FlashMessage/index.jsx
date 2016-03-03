import React from 'react'

export const FlashMessage = React.createClass({
    getInitialState: () => {
        return { show:true }
    },
    render() {
        let content = null
        if(this.state.show) {
            let className='flashMessage'
            if(this.props.messageLevel) {
                className+=' flashMessage--'+this.props.messageLevel
            }
            content = (
                 <div className={className}>
                    <p>{this.props.children}<span className="flashMessage__close" onClick={this.hide}>x</span></p>
                </div>
            )
        }
        return content
    },
    hide() {
        this.setState({ show:false })
    }
})
require('./flashMessage.scss')
