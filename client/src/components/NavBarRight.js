import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavButtonStyle } from '../Styles/ButtonStyles'

class NavBarRight extends Component {
    render() {
        return (
                <NavButtonStyle>
                    <Link to="/userpage" className="button">Back to your page</Link>
                    <Link to="/" className="button">Logout</Link>
                </NavButtonStyle>
        )
    }
}

export default NavBarRight