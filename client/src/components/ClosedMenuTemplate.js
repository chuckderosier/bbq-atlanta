import React, { Component } from 'react'
import styled from 'styled components'

const ClosedMenuStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    margin: 0 auto;
    width: 30%;
    height: 90%;
    background-color: rgb(255, 245, 230);
    border: .5em solid rgb(100, 50, 50);
    border-radius: .5em;
`

class ClosedMenuTemplate extends Component {
    render() {
        return (
            <ClosedMenuStyle>
                
            </ClosedMenuStyle>
        )
    }
}

export default ClosedMenuTemplate