// Jumbotron Styling

import styled from 'styled-components'

// First real example of styled components usage, the strength of this
// is the ability to pull in props into the styling while still having the
// styling be seperate from the Component logic

// pulling in prop data is especially important because of fixtures technique

// Prop data is pulled in via template literal which accepts a callback function
// which in turn destructures the props object and returns the desired prop, in
// this case being direction

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

// Pane - used to divide up the space available for a group of elements 50/50
export const Pane = styled.div`
    width: 50%;

    @media (max-width: 900px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Container = styled.section`
    background-color: black;

    @media (max-width: 900px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;

// title - 
export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;
// subtitle
export const SubTitle = styled.h2`
    font-size: 26px;
    font-width: normal;
    line-width: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;
// image
export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;