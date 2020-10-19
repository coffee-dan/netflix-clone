import React from 'react'
import Jumbotron from '../components/jumbotron'

export default function Home() {
    return (
        <Jumbotron.Container>
            <Jumbotron.Title>I am home!</Jumbotron.Title>
            <Jumbotron.SubTitle>Hello!</Jumbotron.SubTitle>
        </Jumbotron.Container>
    )
}