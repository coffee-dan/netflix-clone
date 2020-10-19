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

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex
`;

export const Container = styled.section``;

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