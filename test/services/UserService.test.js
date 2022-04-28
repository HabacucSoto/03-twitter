const UserService = require( '../../app/services/UserService' )

describe( 'Unit test for class UserService', () => {

    test( '1) Create a new user with UserService', () => {

        const { id, username, name, bio } = UserService.create( 1, 'habacucsoto', 'Habacuc Soto' )
        
        expect( id ).toBe( 1 )
        expect( username ).toBe( 'habacucsoto' )
        expect( name ).toBe( 'Habacuc Soto' )
        expect( bio ).not.toBeUndefined()

    } )

    test( '2) Get all user data in a list', () => {

        const user = UserService.create( 1, 'habacucsoto', 'Habacuc Soto' )
        const userInfo = UserService.getInfo( user )
        const val = [ 1, 'habacucsoto', 'Habacuc Soto', 'Sin bio' ]

        for( let i = 0; i < userInfo.length; i++ ){
            expect( userInfo[ i ] ).toBe( val[ i ] )
        }

    } )

    test( '3) Update username', () => {

        const user = UserService.create( 1, 'habacucsoto', 'Habacuc Soto' )

        UserService.updateUsername( user, 'habacucs' )

        expect( user.username ).toBe( 'habacucs' )

    } )

    test( '4) Given a list of users give me the list of usernames', () => {

        const user1 = UserService.create( 1, 'habacucsoto1', 'Habacuc Soto' )
        const user2 = UserService.create( 1, 'habacucsoto2', 'Habacuc Soto' )
        const user3 = UserService.create( 1, 'habacucsoto3', 'Habacuc Soto' )

        const usernames = UserService.getAllUsernames( [ user1, user2, user3 ] )

        expect( usernames ).toContain( 'habacucsoto1' )
        expect( usernames ).toContain( 'habacucsoto2' )
        expect( usernames ).toContain( 'habacucsoto3' )

    } )

} )