// Header styling
import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (
        src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'
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

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.div`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

// Feature is directly built off of Container styling
export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color: 0.5s ease;
    
    &:hover {
        background: #ff1e1e;
        color: white;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        display: none;
    }
`

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${ ({ active }) => (active === true ? '10px' : '0') };
    padding: ${ ({ active }) => (active === true ? '0 10px' : '0') };
    opacity: ${ ({ active }) => (active === true ? '1' : '0') };
    width: ${ ({ active }) => (active === true ? '200px' : '0px') };
`
