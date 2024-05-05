/** // batch --> 7
 * JWT: secure your api
 * ---------------------------------------
 *              CREATE TOKEN
 * --------------------------------------
 * 1. client: after user login send user basic info to create token
 * 
 * 2. in the server side: install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires} )
 * 5. return token to the client side
 * 
 * 6. after receiving the token store it either httponly cookies or localstorage (second best solution)
 * 
 * 7. use a general space onAuthStateChange > AuthProvider
 * -------------------------------------
 *              SEND TOKEN TO SERVER
 * ---------------------------------------
 * 1. for sensitive api call ( ) send authorization headers
 *  { authorization: 'Bearer token'}
 * 
 * -------------------------------------
 *              VERIFY TOKEN
 * --------------------------------------
 * 
 * 1. Create a function called verifyJWT (middleware)
 * 2. this function will have three params: req, res, next 
 * 3. First check whether the authorization headers exists 
 * 4. if not send 401 
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (err, decoded))
 * 7. if err => send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function 
 * 
 * -----------------------
 * 1. check wether token has the email that matches with the request email
 * 
 * 
 * // batch ---------------------------------------------------> 8
 * /****
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expiresIn:})
 * token client 
 * 
 * 
*/


/***
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. local storage -->ok type (XSS)
 * 3. cookies: http only and s
*/

/**
 * 1. set cookies with http only. for development secure: false, 
 * 
 * 2. cors
 * app.use(cors({
    origin: ['http://localhost:5174'],
    credentials: true
}));
 * 
 * 3. client side axios setting
 * in axios set withCredentials: true
 * 
 * 
*/


/**
 * 1. to send cookies from the client make sure you added withCredentials true for the api call using axios
 * 2. use cookie parser as middleware
*/
