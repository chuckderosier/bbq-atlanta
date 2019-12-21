import styled from 'styled-components'

export const ButtonStyle = styled.div`
    margin: .5em auto;
    .button {
        color: black;
        text-decoration: none;
        font-weight: bold;
        border-radius: 15px;
        padding: .8em;
    }
`

export const HomePageButton = styled(ButtonStyle)`
    margin: 1em auto;
    width: 40%;
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