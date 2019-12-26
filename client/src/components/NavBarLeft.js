import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../Styles/ButtonStyles'
import { LeftStyle, RightStyle, OpenMenuStyle } from '../Styles/ContainerStyle'


class NavBarLeft extends Component {
    render() {
        return (
                <LeftStyle>
                    <ButtonStyle>
                        <Link to="/userpage" className="button">Your Page</Link>
                        <Link to="/" className="button">Change Profile</Link>
                        <Link to="/" className="button">Add BBQ Joint</Link>
                    </ButtonStyle>
                </LeftStyle>
        )
    }
}

export default NavBarLeft