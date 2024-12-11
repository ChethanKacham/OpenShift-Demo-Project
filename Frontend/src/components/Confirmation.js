import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Confirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }
    handleBack = (event) =>{
       event.preventDefault()
       this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <hr></hr>
                <h2>You have successfully created the project</h2>
                    <button onClick={this.handleBack}>Back to OpenShift</button>
            </div>
        )

    }
}


export default withRouter(Confirmation)