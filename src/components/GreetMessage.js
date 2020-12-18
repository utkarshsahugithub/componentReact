import React, { Component } from 'react'

class GreetMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             firstName: "",
             lastName: "",
             fullName: ""
        }
    }
    getFirstName(e) {
      this.setState({
          firstName: e.target.value
      })
    }
    getLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    displayInputValues() {
        this.setState({
            fullName: this.state.firstName+" "+this.state.lastName
        })
    }
    render() {
        return (
            <div>
                <h1>Enter your first name:</h1>
                <input type="text" id="first" value={this.state.value} onChange={(e) => this.getFirstName(e)} />
                <h1>Enter your last name:</h1>
                <input type="text" id="last" value={this.state.value} onChange={(e) => this.getLastName(e)}/>
                <button onClick={() => this.displayInputValues()}>Submit</button>
                <h1>{this.state.fullName}</h1>
            </div>
        )
    }
}

export default GreetMessage
