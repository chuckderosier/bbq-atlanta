import React, { Component } from 'react'
import NavBarLeft from './NavBarLeft'
import NavBarRight from './NavBarRight'
import { Title, Text } from '../Styles/TextStyles'
import { InvisibleBox } from '../Styles/ContainerStyle'
import { LeftStyle, RightStyle, OpenMenuStyle } from '../Styles/ContainerStyle'

class UserPage extends Component {
    render() {
        return (
            <InvisibleBox>
                <OpenMenuStyle>
                    <LeftStyle>
                        <NavBarLeft />
                        <Title>
                            <h2>This is your bbq menu</h2>
                            <h4>Your preferred BBQ styles:</h4>
                            <Text></Text>
                        </Title>
                    </LeftStyle>
                    <RightStyle>
                        <NavBarRight />
                    </RightStyle>
                </OpenMenuStyle>
            </InvisibleBox>
        )
    }
}

export default UserPage