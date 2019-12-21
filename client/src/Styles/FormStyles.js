import styled from 'styled-components'

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 80%;
    input {
        margin: 0 auto;
        width: 90%
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