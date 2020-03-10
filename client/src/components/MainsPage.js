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
                            <h2>MAINS</h2>
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