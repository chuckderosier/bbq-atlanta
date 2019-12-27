import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavButtonStyle } from '../Styles/ButtonStyles'

class NavBarRight extends Component {
    render() {
        return (
                <NavButtonStyle>
                    <Link to="/otheruserspage" className="button">Other people's BBQ Joints</Link>
                    <Link to="/" className="button">Logout</Link>
                </NavButtonStyle>
        )
    }
}

export default NavBarRight