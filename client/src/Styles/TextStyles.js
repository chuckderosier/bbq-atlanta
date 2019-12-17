import styled from 'styled-components'

export const Title = styled.div`
        text-align: center;
        margin: 1em auto 4em auto;
        h1 {
            font-size: 3em;
            margin: 0 auto;
        }
        h2 {
            font-size: 2em;
            margin: 0 auto;
        }
        h3 {
            font-size: 1em;
            width: 40%;
            margin: 0 auto;
        }
`

export const Text = styled.div`
        text-align: center;
        .description-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h4 {
            font-size: 1.5em;
            margin: .2em auto;
        }
        p {
            font-size: 1em;
            width: 40%;
            margin: 0 auto;
        }
`