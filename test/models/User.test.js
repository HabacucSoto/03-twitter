const User = require( '../../app/models/User' )

describe( 'Suite test for User class', () => {

    test( '1) Create a User object', () => {

        const { id, username, name, bio, dateCreated, lastUpdated } = new User( 1, 'habacucsoto', 'Habacuc Soto', 'bio' )

        expect( id ).toBe( 1 )
        expect( username ).toBe( 'habacucsoto' )
        expect( name ).toBe( 'Habacuc Soto' )
        expect( bio ).toBe( 'bio' )
        expect( dateCreated ).not.toBeUndefined()
        expect( lastUpdated ).not.toBeUndefined()

    } )

    test( '2) Add getters', () => {

        const { getId, getUsername,getName, getBio, getDateCreated, getLastUpdated } = new User( 1, 'habacucsoto', 'Habacuc Soto', 'bio' )

        expect( getId ).toBe( 1 )
        expect( getUsername ).toBe( 'habacucsoto' )
        expect( getName ).toBe( 'Habacuc Soto' )
        expect( getBio ).toBe( 'bio' )
        expect( getDateCreated ).not.toBeUndefined()
        expect( getLastUpdated ).not.toBeUndefined()

    } )

    test( '3) Add setters', () => {

        const user = new User( 1, 'habacucsoto', 'Habacuc Soto', 'bio' ) 

        user.setUsername = 'New username'
        expect( user.username ).toBe( 'New username' )
        
        user.setBio = 'New bio'
        expect( user.bio ).toBe( 'New bio' )

    } )

} )