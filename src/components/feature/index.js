// Feature Component
import React from 'react'
import { Container, Title, SubTitle } from './styles/feature'

// feature is a relatively standard compound component 
// Container - section
export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

// title - styled div
Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

// subtitle - styled div
Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

// compound components to put the component together
// add the feature component to index.js
