import styled from 'styled-components'

export const QuestionMark = styled.div`
    margin: 0 0 0 .2em;
    background-color: rgba(150, 150, 150, .8);
    width: 1.2em;
    height: 1.2em;
    border-radius: 100%;
    text-align: center;
    .to-show {
        position: relative;
        display: inline-block;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .to-show .item-description {
        margin: 0;
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
    .to-show:hover .item-description {
        visibility: visible;
    }
`   