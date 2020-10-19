import React from 'react'
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer'

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

// Row
Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

// Column
Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

// Link
Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

// Title
Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

// Text
Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

// Break
Footer.Break = function FooterBreak({ ...restProps }) {
    return <Break {...restProps} />
}
