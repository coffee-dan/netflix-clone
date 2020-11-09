// Accordion Component
import React, { useState, useContext, createContext } from 'react'
import { Body, Title, Header, Container, Inner, Item, Frame } from './styles/accordion'

// Using state to keep track of if accordion is open
// ToggleContext shares the toggle functionality to anywhere within this
// component tree that it is referrenced
const ToggleContext = createContext()

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
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

// Title
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

// Header
// {url()}
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                    <img src='/images/icons/close-slim.png' alt="Close" />
                ) : (
                    <img src='/images/icons/add.png' alt="Open" />
                )
            }
        </Header>
    )
}

// Body
Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)


    return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
