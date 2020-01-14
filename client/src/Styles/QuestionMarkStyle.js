import styled from 'styled-components'

export const QuestionMark = styled.div`
    margin: 0 auto;
    position: relative;
    display: inline-block;
    background-color: gray;
    width: 1.2em;
    height: 1.2em;
    border-radius: 100%;
    text-align: center;
    .sauce-description {
        visibility: hidden;
        width: 20%;
        height: auto;
        color: blue;
        text-align: center;
        background-color: rgba(255, 255, 255, .8);
        border-radius: 10%;
        padding: .2em;
        position: absolute;
        z-index: 1;
    }
    .sauce-description:hover {
        visibility: visible;
    }
`   