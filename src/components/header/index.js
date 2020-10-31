// Header Component
import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { 
    Group,
    Background, Container, 
    Link, Text, 
    Logo, ButtonLink,
    Feature, FeatureCallOut,
    PlayButton,
    Search, SearchIcon, SearchInput,
    Profile, Picture, Dropdown    
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

// Search - need to have styling for all there components here
Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src='/images/icons/search.png' alt='Search' />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onchange={ ({ target }) => setSearchTerm(target.value) }
                placeholder='Search files and series'
                active={searchActive}
            />
        </Search>
    )
}

// logo is clickable element so it has href in "to" prop
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

// Profile
Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return (
        <Profile {...restProps}>
            {children}
        </Profile>
    )
}

// Picture
Header.Picture = function HeaderPicture({ src, alt, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} alt={ alt } />
}

// dropdown 
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}
