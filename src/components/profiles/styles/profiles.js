// Profiles styling
import styled from 'styled-components'

// Container
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`

// Title
export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-weight: 500;
`

// List
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`

// Name
export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`



// User
export const User = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

   
    
    /* &:hover ${Name} { */
    &:hover Profiles.Name {
        font-weight: bold;
        color: white;
    }
    
    &:last-of-type {
        margin-right: 0;
    }
`

// Picture
export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;

    &:hover {
        border: 3px solid white;
    }
`

