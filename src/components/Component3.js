import React, { Component } from 'react'

export class Component3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementByOne() {
        // this.setState(
        //     {
        //     count: this.state.count + 1
        //     }, 
        //     () => {
        //     console.log("Callback value ", this.state.count);
        //     }
        // )
        this.setState((prevState, props) => {
            console.log(prevState)
            return { count : prevState.count + 1 };
        })
        // console.log(this.state.count);
    }
    incrementFive() {
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
        this.incrementByOne()
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Get +1</button>
            </div>
        )
    }
}

export default Component3
