import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavButtonStyle } from '../Styles/ButtonStyles'

class NavBarLeft extends Component {
    render() {
        return (
            <NavButtonStyle>
                <Link to="/" className="button">Edit Profile</Link>
                <Link to="/" className="button">Add BBQ Joint</Link>
                <Link to="/otheruserspage" className="button">Other Folks Joints</Link>
            </NavButtonStyle>
        )
    }
}

export default NavBarLeft