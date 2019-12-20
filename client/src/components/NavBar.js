import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonStyle } from '../Styles/ButtonStyles'
import { LeftStyle, RightStyle, OpenMenuStyle } from '../Styles/ContainerStyle'


class NavBar extends Component {
    render() {
        return (
            <OpenMenuStyle>
                <LeftStyle>
                    <ButtonStyle>
                        <Link to="/userpage" className="button">Your Page</Link>
                        <Link to="/" className="button">Change Profile</Link>
                        <Link to="/" className="button">Add BBQ Joint</Link>
                    </ButtonStyle>
                </LeftStyle>
                <RightStyle>
                    <ButtonStyle>
                        <Link to="/otheruserspage" className="button">Other people's BBQ Joints</Link>
                        <Link to="/" className="button">Logout</Link>
                    </ButtonStyle>
                </RightStyle>
            </OpenMenuStyle>
        )
    }
}

export default NavBar