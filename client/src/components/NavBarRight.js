import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../Styles/ButtonStyles'

class NavBarRight extends Component {
    render() {
        return (
                <ButtonStyle>
                    <Link to="/otheruserspage" className="button">Other people's BBQ Joints</Link>
                    <Link to="/" className="button">Logout</Link>
                </ButtonStyle>
        )
    }
}

export default NavBarRight