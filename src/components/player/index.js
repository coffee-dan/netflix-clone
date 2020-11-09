import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay, Inner, Button, Close } from './styles/player'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
    const [ showPlayer, setShowPlayer ] = useState( false )

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext( PlayerContext )

    return showPlayer
        // first arguement is what is being shown on the other end of the portal
        // second arguement is where this should be injected which is this case
        //       it will be put at the bottom of the DOM tree
        // this approach requires styling to set the video player in front of all
        //      other elements and in the center of the screen
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer( false )}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src="/videos/bunny.mp4" type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        ) : null
}

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext( PlayerContext )

    return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>
}
