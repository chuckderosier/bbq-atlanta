import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Title, Description } from '../Styles/TextStyles'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Title>
                    <h1>BBQ Atlanta</h1>
                    <h2>Share and Rate BBQ Restaurants in Atlanta</h2>
                </Title>
                <Description>
                    <div className="descriptionBox">
                        <p>There are many websites that rate restaurants but I know of none that rates different items on the menu.</p>
                        <h4>Why is that important?</h4>
                        <p>I have to places that had great ribs but mediocre pulled pork. Overall ratings do not tell all you need to know before you choose your destination.</p>
                    </div>
                </Description>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/newuser">Create Your Account</Link>
                </div>
            </div>
        )
    }
}

export default HomePage