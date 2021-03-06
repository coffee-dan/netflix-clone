// Accordion Styling
import styled from 'styled-components'

// Container
export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`

// Frame - "an items holder"
export const Frame = styled.div`
    margin-bottom: 10px;
    max-width: 815px;
`

// Inner
export const Inner = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

// Item
export const Item = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`

// Title
export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`

// Header
// Note! user-select: none; creates the effect of the use not being able to interact
// with that particular element in any way. this is especially noticeable with text
// as it prevents the user from selecting text for any reason
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em;
    user-select: none;
    align-items: center;
    width: 100%;

    img {
        filter: brightness(0) invert(1);
        width 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }

`

// Body
export const Body = styled.div`
    box-sizing: border-box;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em;
    align-items: center;
    width: 100%;
    
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`