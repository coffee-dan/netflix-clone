// Feature styling
import styled from 'styled-components'

// container
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`

// title
export const Title = styled.h1`
    color: white;
    max-width: 640px;
    /* font-size: 1.75rem; */
    font-size: 3.125rem;
    font-weight: regular;
    margin: 0 auto;
    line-height: 1.1;

    /* These multi condition media queries are not working,
        dunno why */
    /* @media (min-width: 550px) and (max-width: 949px) {
        font-size: 3.125rem;
    }

    @media (min-width: 950px) and (max-width: 1449px) {
        font-size: 4rem;
    } */

    @media (min-width: 949px) {
        font-size: 4rem;
        max-width: 800px;
    }

`

// subtitle
export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`