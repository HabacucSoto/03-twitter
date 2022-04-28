const UserService = require( '../services/UserService' )

class UserView {

    static createUser( payload ){
        if( payload === null ){
            return { error: 'payload no existe' }
        }else if( payload.id === null || payload.username === null || payload.name === null ){
            return { error: 'necesitan tener un valor válido'}
        }else {
            return new UserService( payload )
        }
    }

}

module.exports = UserView