const UserView = require( '../../app/views/UserView' )

describe( 'Suite test for class UserView', () => {

    test( '1) Return an error object when try to create a new user with a null payload', () => {

        const payload = null
        const result = UserView.createUser(payload)

        // ? https://jestjs.io/docs/using-matchers#strings
        expect( result.error ).toMatch(/payload no existe/)

    } )

} )