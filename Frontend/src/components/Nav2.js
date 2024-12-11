import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav2(){

    const navStyle={
        color:'white'
    }
    return(
        <nav>
            <ul className="nav-Links1">
                <Link style={navStyle} to='/OpenShiftProject/CreateProject'>
                <li>Create Project</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav2