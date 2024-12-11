import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
//import { Form } from 'react-bootstrap'
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectname: ''
        }
    }

    handleProjectNameChange = (event) => {
        this.setState({
            projectname: event.target.value
        }

        )
    }

    handleSubmit = (event) => {
        alert(`Successfully Submitted 
         ProjectName : ${this.state.projectname}`)
        event.preventDefault()
        axios.post('http://localhost:9001/projectdetails', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        this.props.history.push("/OpenShiftProject/CreateProject/Confirmation")
    }

    render() {
        const { projectname } = this.state;
        return (
            <div>
                <hr></hr>
                <br></br>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="ProjectName">ProjectName: </label>
                        <input type='text' class="form-control" placeholder="Enter Project Name"
                            value={projectname}
                            onChange={this.handleProjectNameChange} required></input>
                    </div>
                    <br></br>

                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }

}

export default withRouter(Forms);