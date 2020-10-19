// Accordion Component

import React, { useState } from 'react'
import { Body, Title, Header, Container, Inner, Item, Frame } from './styles/accordion'

// Using state to keep track of if accordion is open

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

// Frame
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}


// Item
Accordion.Item = function AccordionItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

// Title
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

// Header
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

// Body
Accordion.Body = function AccordionBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}