import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import{ withRouter } from 'react-router-dom'

class Nav1 extends Component {
    
    handleSubmit = (event) => {
        this.props.history.push("/OpenShiftProject")
    }


    render() {
        const navStyle = {
            color: 'white'
        }
        const buttonStyle = {
            float: 'left'
        }
        return (
           // <div>
             //   <button style={buttonStyle} onClick={this.handleSubmit} >Create OpenShift Project</button>
                
                <nav>
                    <ul className="nav-Links">
                        <Link style={navStyle} to='/OpenShiftProject'>
                            <li>Create OpenShift Project</li>
                        </Link>
                    </ul>
                </nav>
                
            //</div>
        )
    }
}

export default withRouter(Nav1);