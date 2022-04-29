const UserService = require( '../services/UserService' )

class UserView {

    static createUser( payload ){
        if( payload === null ){
            return { error: 'payload no existe' }
        }else if( payload.id === null || payload.username === null || payload.name === null ){
            return { error: 'necesitan tener un valor válido'}
        }else if( payload.id && payload.username && payload.name ){
            return UserService.create( payload.id, payload.username, payload.name )
        }else {
            return { error: 'tienen que estar todas las props' }
        }
    }

}
module.exports = UserView