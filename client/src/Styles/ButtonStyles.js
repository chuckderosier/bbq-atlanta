import styled from 'styled-components'

export const Button = styled.div`
    margin: 0 auto;
`

export const HomePageButton = styled(Button)`
    .button-container {
        display: flex;
        justify-content: center;
    }
    .button {
        color: black;
        background-color: red;
        text-justify: center;
        text-decoration: none;
        width: 2em;
        padding: 2em;
        margin: 1em;
    }
`