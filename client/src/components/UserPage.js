import React, { Component } from 'react'
import { Title, Text } from '../Styles/TextStyles'

class UserPage extends Component {
    render() {
        return (
            <div>
                <div className="left">
                    <Title>
                        <h1>This is 's bbq menu</h1>
                        <h4>Your preferred BBQ styles:</h4>
                        <Text></Text>
                    </Title>
                </div>
                <div className="right"></div>
            </div>
        )
    }
}

export default UserPage