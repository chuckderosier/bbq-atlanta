import styled from 'styled-components'

export const Button = styled.div`
    margin: 0 auto;
    .button {
        color: black;
        text-decoration: none;
        font-weight: bold;
        border-radius: 15px;
        padding: .8em;
        text-align: center;
    }
`

export const HomePageButton = styled(Button)`
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
        background-color: red;
    }
`