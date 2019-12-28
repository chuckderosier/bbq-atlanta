import styled from 'styled-components'

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    input {
        width: 100%;
        height: 1.5em;
        font-size: 1em;
    }
    button {
        padding: 1em;
    }
    h2 {
        margin: 0;
    }
    span {
        margin: 0;
    }
    p {
        margin: .8em .1em .2em .1em;
    }
    .required {
        margin: .8em .1em .2em .1em;
        font-size: .6em;
        color: red;
        float: right;
    }
`