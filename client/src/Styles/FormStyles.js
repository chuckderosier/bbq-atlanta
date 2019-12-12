import styled from 'styled-components'

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    input {
        margin: 0 auto;
        width: 100%;
    }
    button {
        margin: 2em auto;
        padding: 1em;
    }
    p {
        margin: .8em .1em .2em .1em;
    }
    .required {
        margin: .8em .1em .2em .1em;
        font-size: .3em;
        color: red;
        float: right;
    }
`