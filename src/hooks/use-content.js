// useConent hook - completely custom for firebase
import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

// made for the purpose of asking firebase for specific data
export default function useContent( target ) {
    const [ content, setContent ] = useState([])
    const { firebase } = useContext( FirebaseContext )

    useEffect(() => {
        firebase
            .firestore()
            .collection( target )
            .get() // here all data from this firestore collection is grabbed
            .then(( snapshot ) => {
                const allContent = snapshot.docs.map(( contentObj ) => ({
                    ...contentObj.data(),
                    docId: contentObj.id
                }))

                setContent( allContent )
            })
            .catch(( error ) => {
                console.log(error.message)
            })
    }, []) // This end bit ensures it only run once

    return { [target]: content }
}
