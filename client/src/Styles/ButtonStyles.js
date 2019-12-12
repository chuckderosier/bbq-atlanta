import styled from 'styled-components'

export const Button = styled.div`
    margin: 0 auto;
    border-radius: 1em;
    .button {
        color: black;
        text-decoration: none;
    }
`

export const HomePageButton = styled(Button)`
    
    background-color: red;
    .button-container {
        width: 40%;
        display: flex;
        justify-content: center;
    }
    .button {
        margin: .5em auto;
        width: 5%;
        height: 5%;
        color: white;
        text-align: center;
    }
`