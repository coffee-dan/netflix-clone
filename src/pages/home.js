import React from 'react'
import { FaqsContainer } from '../containers/faqs'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Feature, OptForm } from '../components'

export default function Home() {
    return (
        <>
            {/* Need to figure out what goes in header, a main feature type thing */}
            <HeaderContainer>
                <OptForm>
                    <Feature>
                        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
                    </Feature>

                
                    <OptForm.Text>Ready to watch? Enter your email to create or restart
                    your membership.</OptForm.Text>
                    <OptForm.Break />
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Get started</OptForm.Button>
                </OptForm>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}