const UserService = require( '../services/UserService' )

class UserView {

    static createUser( payload ){
        if( payload === null ){
            return { error: 'payload no existe' }
        }else{
            return new UserService( payload )
        }
    }

}

module.exports = UserView