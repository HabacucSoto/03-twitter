const UserView = require( '../../app/views/UserView' )

describe( 'Suite test for class UserView', () => {

    test( '1) Return an error object when try to create a new user with a null payload', () => {

        const payload = null
        const result = UserView.createUser( payload )

        // ? https://jestjs.io/docs/using-matchers#strings
        expect( result.error ).toMatch( /payload no existe/ )

    } )

    test( '2) Return an error object when try to create a new user with a payload with invalid props', () => {

        const payload = { username: null, name: 12, id: 'id' }
        const result = UserView.createUser( payload )

        expect( result.error ).toMatch( /necesitan tener un valor válido/ )

    } )

    test( '3) Return an error object when try to create a new user with a payload with missing props', () => {

        const payload = { username: 'thisisausername' }
        const result = UserView.createUser( payload )

        expect( result.error ).toMatch(/tienen que estar todas las props/)

    } )

} )