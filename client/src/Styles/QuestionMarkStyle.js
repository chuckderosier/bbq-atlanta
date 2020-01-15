import styled from 'styled-components'

export const QuestionMark = styled.div`
    margin: 0 auto;
    position: absolute;
    display: inline-block;
    margin: 0 0 0 .2em;
    background-color: gray;
    width: 1.2em;
    height: 1.2em;
    border-radius: 100%;
    text-align: center;
    .to-show {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .to-show .sauce-description {
        visibility: hidden;
        width: auto;
        height: auto;
        color: white;
        text-align: center;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 10%;
        padding: .2em;
        position: absolute;
        z-index: 1;
    }
    .to-show:hover .sauce-description {
        visibility: visible;
    }
`   