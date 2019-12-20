import React, { Component } from 'react'
import NavBar from './NavBar'
import { Title, Text } from '../Styles/TextStyles'
import { LeftStyle, RightStyle, OpenMenuStyle } from '../Styles/ContainerStyle'

class UserPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <OpenMenuStyle>
                    <LeftStyle>
                        <Title>
                            <h2>This is your bbq menu</h2>
                            <h4>Your preferred BBQ styles:</h4>
                            <Text></Text>
                        </Title>
                    </LeftStyle>
                    <RightStyle></RightStyle>
                </OpenMenuStyle>
            </div>
        )
    }
}

export default UserPage