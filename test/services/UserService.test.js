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

} )