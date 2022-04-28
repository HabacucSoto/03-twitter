const User = require( '../models/User' )

class UserService {

    static create( id, username, name ){
        return new User( id, username, name, 'Sin bio')
    }

    static getInfo( { id, username, name, bio } ){
        return [ id, username, name, bio ]
    }

}

module.exports = UserService