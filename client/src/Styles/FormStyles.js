import styled from 'styled-components'

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    input {
        margin: 0 auto .2em 0;
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
        /* margin: 0 .1em 0 .1em; */
        font-size: .8em;
        color: red;
        float: right;
    }
    .checkbox-container {
        width: 50%;
        margin: .6em 0 0 0;
        display: flex;
        flex-direction: column;
        .each-checkbox {
            margin: 0 0 5px 0;
            display: flex;
            flex-direction: row;
            align-content: center;
        }
        .input {
            width: 1em;
            margin: 0 0 0 .2em;
            background-color: pink;
            border: solid black 2px;
        }
    }
`