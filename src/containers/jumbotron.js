// JumbotronContainer
import React from 'react'
import jumboData from '../fixtures/jumbo.json'
import { Jumbotron } from '../components'
// webpack file-loader image imports
// const pathToMisc = require.context('/images/misc/', true, /home/)

// https://webpack.js.org/guides/dependency-management/#context-module-api
// this page in the docs provides great insight for working with require.context
// the code snippet provided helps debugging

export function JumbotronContainer() {
    // getHashedPath gets the path to the bundled image asset that was created after
    // the /image/misc/ was pulled in by file-loader
    // this takes some string manipulation as the very specific format of ./[name].[ext]
    // is used by the context object created by require.context() 
    // function getHashedPath( imgPath ) {
    //     const imgName = imgPath.replace('/images/misc', '.')
    //     return pathToMisc(imgName, true).default
    // }

    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image
                            src={item.image}
                            alt={item.alt}
                        />
                    </Jumbotron.Pane>
                    
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}
