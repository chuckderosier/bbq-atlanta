import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ClosedMenuStyle, InvisibleBox } from '../Styles/ContainerStyle'
import { Title, Text } from '../Styles/TextStyles'
import { HomePageButton } from '../Styles/ButtonStyles'
// import MenuTemplate from './MenuTemplate'

// const PageContentsStyle = styled.div`
//     position: relative;
//     z-index: 5;
// `

const PigStyle = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 80%;
        height: auto;
    }
`

class HomePage extends Component {
    render() {
        return (
            <InvisibleBox>
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
                            <Link to="/login" className='button'>Login or<br />Create New Account</Link>
                        </div>
                    </HomePageButton>
                    <PigStyle>
                        <img src="https://i.imgur.com/3RYU61V.png" title="source: imgur.com" alt="pig" />
                    </PigStyle>
                </ClosedMenuStyle>
            </InvisibleBox>
        )
    }
}

export default HomePage