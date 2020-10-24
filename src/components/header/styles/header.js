// Header styling
import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (
        src ? '../images/misc/${src}.jpg' : '../images/misc/home-bg.jpg'
    )}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && 'background: none;' }
    }
`

export const Container = styled.div`
    display: flex;
    margin: 0 3.5rem;
    height: 64px;
    padding-top: 16px;
    justify-content: space-between;
    align-items: center;
    
    a {
        display: flex;
    }
    
    /* rem units allow media queries to be avoided */
`

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (
        active === 'true' ? '700' : 'normal'
    )};

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`
export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    line-height: normal;
    color: white;
    border: 0;
    font-size: 1rem;
    /* font-weight here is effectively 400 but using keyword
        to make it work for unknown reasons */
    font-weight: regular;
    border-radius: 3px;
    padding: 7px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    /* text-align: center; */

    &:hover {
        background: #f40612;
    }
`

export const Logo = styled.img`
    height: 36px;
    width: 134px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`
