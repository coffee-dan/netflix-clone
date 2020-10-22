// Header Component
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, Logo, ButtonLink } from './styles/header';

export default function Header({ bg='true', children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

// logo is clickable element so it has href in "to" prop
Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}