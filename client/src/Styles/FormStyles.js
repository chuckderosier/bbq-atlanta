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
    h2 {
        margin: 0;
    }
    span {
        margin: 0;
    }
    p {
        margin: 0 .1em .2em .1em;
    }
    .required {
        margin: 0 .1em .2em .1em;
        font-size: .6em;
        color: red;
        float: right;
    }
    .checkbox-container {
        width: 50%;
        padding: .2em;
        display: flex;
        flex-direction: column;
        input {
            /* display: inline; */
            margin: 0;
        }
        .each-checkbox {
            clear: right;
            float: none;
            margin: 0;
            display: flex;
            flex-direction: start;
        }
    }
`