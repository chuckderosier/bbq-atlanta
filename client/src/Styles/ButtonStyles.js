import styled from 'styled-components'

export const ButtonStyle = styled.div`
    margin: .5em auto;
    .button {
        color: rgb(0, 0, 255);
        background-color: rgb(210, 210, 255);
        text-decoration: none;
        font-weight: bold;
        border-width: 3px;
        border-color: rgb(0, 0, 255);
        border-radius: 15px;
        padding: .8em;
    }
    .button:hover {
        color: rgb(210, 210, 255);
        background-color: rgb(0, 0, 255);
        border-color: rgb(210, 210, 255);
    }
`

export const HomePageButton = styled(ButtonStyle)`
    margin: 1em auto;
    width: 60%;
    .button-container {
        display: flex;
        justify-content: center;
    }
    .button {
        margin: 0 auto;
        height: 5%;
        color: white;
        text-align: center;
        background-color: red;
    }
`

export const NavButtonStyle = styled.div`
    font-family: 'Permanent Marker', cursive;
    margin: .4em auto;
    display: flex;
    justify-content: space-around;
    .button {
        color: rgb(0, 0, 0);
        background-color: rgb(255, 245, 230);
        text-decoration: none;
        padding: .2em;
    }
`
