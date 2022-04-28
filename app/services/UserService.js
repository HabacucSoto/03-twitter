const User = require( '../models/User' )

class UserService {

    static create( id, username, name ){
        return new User( id, username, name, 'Sin bio')
    }

    static getInfo( { id, username, name, bio } ){
        return [ id, username, name, bio ]
    }

    static updateUsername( user, newUsername ){
        return user.username = newUsername
    }

    static getAllUsernames( arr ){
        const usernames = []
        arr.forEach( ( { username } ) => usernames.push( username ) )
        return usernames
    }

}

module.exports = UserService