import React, { Component } from 'react'
import NavBarRight from './NavBarRight'
import { Title, Text } from '../Styles/TextStyles'
import { InvisibleBox } from '../Styles/ContainerStyle'
import { LeftStyle, RightStyle } from '../Styles/ContainerStyle'

class OtherUsersPage extends Component {
    render() {
        return (
            <InvisibleBox>
                <LeftStyle>
                    <NavBarRight />
                    <Title>
                        <h2>Other BBQ Lovers</h2>
                        <h4>and their preferred styles</h4>
                        <Text></Text>
                    </Title>
                </LeftStyle>
                <RightStyle>
                </RightStyle>
            </InvisibleBox>
        )
    }
}

export default OtherUsersPage