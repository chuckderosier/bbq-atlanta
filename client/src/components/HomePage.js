import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ClosedMenuStyle } from '../Styles/ContainerStyle'
import { Title, Text } from '../Styles/TextStyles'
import { HomePageButton } from '../Styles/ButtonStyles'

class HomePage extends Component {
    render() {
        return (
            <ClosedMenuStyle>
                <Title>
                    <h1>BBQ Atlanta</h1>
                    <h3>Share and Rate BBQ Restaurants in Atlanta</h3>
                </Title>
                <Text>
                    <div className="description-container">
                        <p>There are many websites that rate restaurants but I know of none that rates different items on the menu.</p>
                        <h4>Why is that important?</h4>
                        <p>I have to places that had great ribs but mediocre pulled pork. Overall ratings do not tell all you need to know before you choose your destination.</p>
                    </div>
                </Text>
                <HomePageButton>
                    <div className="button-container">
                        <Link to="/login" className='button'>Login<br />or<br />Create New Account</Link>
                    </div>
                </HomePageButton>
            </ClosedMenuStyle>
        )
    }
}

export default HomePage