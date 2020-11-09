// FooterContainer
import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="https://help.netflix.com/en/node/412">FAQs</Footer.Link>
                    <Footer.Link href="https://ir.netflix.com">Investor Relations</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/watch">Ways to Watch</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/corpinfo">Corporate Information</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/browse/genre/839338">Netflix Originals</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="https://help.netflix.com/">Help Center</Footer.Link>
                    <Footer.Link href="https://jobs.netflix.com/jobs">Jobs</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/termsofuse">Terms of Use</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/contactus">Contact Us</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="https://www.netflix.com/youraccount">Account</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/redeem">Redeem gift cards</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/privacy">Privacy</Footer.Link>
                    <Footer.Link href="https://fast.com/">Speed Test</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="https://media.netflix.com/">Media Center</Footer.Link>
                    <Footer.Link href="https://www.netflix.com/gift-cards">Buy Gift Cards</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/privacy#cookies">Cookie Preferences</Footer.Link>
                    <Footer.Link href="https://help.netflix.com/legal/notices">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break></Footer.Break>
            <Footer.Text>Netflix United States</Footer.Text>
        </Footer>
    )
}
