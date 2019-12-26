import styled from 'styled-components'

export const InvisibleBox = styled.div`
    display: flex;
    align-content: center;
    width: 100%;
    height: 100%;
`

export const ClosedMenuStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    margin: 0 auto;
    width: 30%;
    height: 90%;
    background-color: rgb(255, 245, 230);
    border: .5em solid rgb(100, 50, 50);
    border-radius: .5em;
`

export const OpenMenuStyle = styled.div`
    margin: 0 auto;
`

export const LeftStyle = styled.div`
    margin: 0;
    width: 30%;
    height: 90%;
    background-color: rgb(255, 230, 230);
    border: .5em solid rgb(100, 50, 50);
    border-radius: .5em;
    float: left;
`

export const RightStyle = styled.div`
    margin: 0;
    width: 30%;
    height: 90%;
    background-color: rgb(255, 245, 230);
    border: .5em solid rgb(100, 50, 50);
    border-radius: .5em;
    float: right;
`

 export const FormContainerStyle = styled.div`
    margin: 0 auto;
    width: 90%;
`