
class User {

    username;
    email;
    phone;
    name;
    password;
    // token; //change
    _id;

   

    static  verifyUsernameAndEmailExists({username, email}) {
        //checks whether email or username already exists in db
    }

    static verifyTokenExists(token) {
        //checks whether the token exists in db
    }

    static loginUser({loginId, password}) {
        //logs in user and returns a response accordingly
    }

    
    registerUser() {
       //registers a new user and returns a valid response
    }

}


module.exports = User; 
