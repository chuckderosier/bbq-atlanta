import React, { Component } from 'react'
import NavBar from './NavBar'
import { Title, Text } from '../Styles/TextStyles'
import { LeftStyle, RightStyle, MenuStyle } from '../Styles/ContainerStyle'

class UserPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <MenuStyle>
                    <LeftStyle>
                        <Title>
                            <h2>This is 's bbq menu</h2>
                            <h4>Your preferred BBQ styles:</h4>
                            <Text></Text>
                        </Title>
                    </LeftStyle>
                    <RightStyle></RightStyle>
                </MenuStyle>
            </div>
        )
    }
}

export default UserPage