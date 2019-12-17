import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Styles/ButtonStyles'
import { LeftStyle, RightStyle, MenuStyle } from '../Styles/ContainerStyle'


class NavBar extends Component {
    render() {
        return (
            <MenuStyle>
                <LeftStyle>
                    <Button>
                        <Link to="/userpage" className="button">Your Page</Link>
                        <Link to="/" className="button">Change Profile</Link>
                        <Link to="/" className="button">Add BBQ Joint</Link>
                    </Button>
                </LeftStyle>
                <Button>
                    <RightStyle>
                        <Link to="/otheruserspage" className="button">Other people's BBQ Joints</Link>
                        <Link to="/" className="button">Logout</Link>
                    </RightStyle>
                </Button>
            </MenuStyle>
        )
    }
}

export default NavBar