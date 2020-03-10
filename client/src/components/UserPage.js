import React, { Component } from 'react'
import NavBarLeft from './NavBarLeft'
import NavBarRight from './NavBarRight'
import { Title, Text } from '../Styles/TextStyles'
import { InvisibleBox, LeftStyle, RightStyle } from '../Styles/ContainerStyle'

class UserPage extends Component {
    render() {
        return (
            <InvisibleBox>
                <LeftStyle>
                    <NavBarLeft />
                    <Title>
                        <h2>This is your BBQ menu</h2>
                        <h4>Your preferred BBQ styles:</h4>
                        <Text></Text>
                    </Title>
                </LeftStyle>
                <RightStyle>
                    <NavBarRight />
                </RightStyle>
            </InvisibleBox>
        )
    }
}

export default UserPage