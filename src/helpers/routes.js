import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={() => {
                // if there's not a user then send them where they were trying to go
                // this is only safe on certain routes
                if ( !user ) {
                    return children
                }

                if ( user ) {
                    return (
                        <Redirect  
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    )
                }

                return null
            }}
        />
    )
}

// protected route - for browse page
// created as higher order component
export function ProtectedRoute({ user, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if ( user ) {
                    return children
                }
                
                // if they are not a user send them to signin page
                // while maintaining there browser history
                if ( !user ) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location }
                            }}
                        />
                    )
                }
            }}
        />
    )
}
