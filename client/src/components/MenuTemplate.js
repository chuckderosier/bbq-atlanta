import React, { Component } from 'react'
import styled from 'styled-components'

const InvisibleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const MenuPageStyle = styled.div`
    position: relative;
    z-index: 1;
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

class MenuTemplate extends Component {
    render() {
        return (
            <InvisibleBox>
                <MenuPageStyle></MenuPageStyle>
            </InvisibleBox>
        )
    }
}

export default MenuTemplate