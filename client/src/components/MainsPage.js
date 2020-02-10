import React, { Component } from 'react'
import { Title } from '../Styles/TextStyles'
import { OpenMenuStyle, InvisibleBox, CheckBoxStyle, LeftStyle, RightStyle } from '../Styles/ContainerStyle'

class MainsPage extends Component {
    render() {
        return (
            <InvisibleBox>
                <OpenMenuStyle>
                    <LeftStyle>
                        <Title>
                            <h2>This is your bbq menu</h2>
                            <h4>Your preferred BBQ styles:</h4>
                        </Title>
                    </LeftStyle>
                    <RightStyle>
                    </RightStyle>
                </OpenMenuStyle>
            </InvisibleBox>
        )
    }
}

export default MainsPage