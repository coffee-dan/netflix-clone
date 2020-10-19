import React from 'react'
import { Container, Item, Inner } from './styles/jumbotron'

// 

/**
 * Will be using compound component x styled component design patterns
 * ~ see docs for info about what these design patterns mean
 * params: children for inheritence, direction for text direction
 */
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}