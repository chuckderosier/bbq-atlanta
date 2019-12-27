import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavButtonStyle } from '../Styles/ButtonStyles'

class NavBarLeft extends Component {
    render() {
        return (
            <NavButtonStyle>
                <Link to="/userpage" className="button">Your Page</Link>
                <Link to="/" className="button">Change Profile</Link>
                <Link to="/" className="button">Add BBQ Joint</Link>
            </NavButtonStyle>
        )
    }
}

export default NavBarLeft