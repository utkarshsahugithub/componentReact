import React, { Component } from 'react'

class Component1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>
                    Hello {this.props.name}
                </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Component1
