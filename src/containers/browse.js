// Browse container
import React, { useState, useContext, useEffect } from 'react'
import Fuse from 'fuse.js'
import { Card, Loading, Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'

// can work with FooterContainer to make it conditionally appear, especially
// considering infinite scroll

export function BrowseContainer({ slides }) {
    const [ category, setCategory ] = useState('series')
    const [ profile, setProfile ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ slideRows, setSlideRows ] = useState([])

    const { firebase } = useContext( FirebaseContext )

    const user = {
        displayName: "Daniel",
        photoURL: "1"
    }

    // Engine for updates based on search. slides holds the formatted data
    // retrieved from firestore. category is provided by which of the two 
    // headerlinks the user click
    useEffect(() => {
        setSlideRows( slides[category] )
    }, [slides, category])

    useEffect(() => {
        setTimeout(() => {
            setLoading( false )
        }, 3000)
    }, [user])

    // With enough of a change to searchTerm a fuse live search will be sent to search
    // through the given key fields. the results of this search are ranked
    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] })
        const results = fuse.search( searchTerm ).map(({ item }) => item)
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0 ) {
            // show results only when the searchTerm is longer than 3 and there are results to show
            setSlideRows( results )
        } else {
            // otherwise just show the normal cards
            setSlideRows( slides[ category ] )
        }

    }, [searchTerm])

    return profile.displayName ? (
        <>
        {loading ? <Loading src={ user.photoURL } alt='loading' /> : <Loading.ReleaseBody />}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                        <Header.Link 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.Link>
                        <Header.Link 
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.Link>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={ user.photoURL } alt='Profile' />
                            <Header.Dropdown> {/* dropdown */}
                                <Header.Group>
                                    <Header.Picture src={ user.photoURL } alt='Profile' />
                                    <Header.Link>{ user.displayName }</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={ () => firebase.auth().signOut() }>
                                        Sign out</Header.Link>
                                </Header.Group>
                            </Header.Dropdown> {/* dropdown */}
                        </Header.Profile>
                    </Header.Group>

                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {/* map over the row to pull out cards.
                    then map over each item to handle an item with multiple 
                    cards such as a series  */}
                {slideRows.map( (slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map( (item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={ category }>
                            <p>I am the feature!</p>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
