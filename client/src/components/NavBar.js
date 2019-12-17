import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyle = styled.div`
    margin: 0 auto;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="left">
                    <Link to="/userpage" className="button">Back to your home page</Link>
                    <Link to="/" className="button">Change your profile</Link>
                    <Link to="/" className="button">Add a new BBQ Joint</Link>
                </div>
                <div className="right">
                    <Link to="/otheruserspage" className="button">See other people's BBQ Joints</Link>
                    <Link to="/" className="button">Logout</Link>
                </div>
            </div>
        )
    }
}

export default NavBar