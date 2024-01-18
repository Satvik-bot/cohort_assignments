### 1. [JWT](https://replit.com/@satviksagar340/JWT)
### 2. Encryption/Decryption
### 3. Hashing
### 4. Local Storage


Local Storage - >  Browser's local storage - > saves the token for [**Single Sign On**](https://jwt.io/introduction#:~:text=with%20that%20token.-,Single%20Sign%20On,-is%20a%20feature) feature.

-----
## JWT
1. Generating a JWT

```
const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey';

// Payload
const payload = {
  userId: 123,
  username: 'john_doe',
  role: 'admin',
};

// Options (optional)
const options = {
  expiresIn: '1h', // Token expiration time
};

// Generate the token
const token = jwt.sign(payload, secretKey, options);

console.log('Generated JWT:', token);	
```

2. Decoding a JWT
```
const jwt = require('jsonwebtoken');

const token = 'yourTokenHere';
const secretKey = 'yourSecretKey';

// Decode the token (no verification)
const decodedToken = jwt.decode(token);

console.log('Decoded JWT (no verification):', decodedToken);

```

3. Verifying a JWT
```
const jwt = require('jsonwebtoken');

const token = 'yourTokenHere';
const secretKey = 'yourSecretKey';

// Verify the token
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('JWT Verification Failed:', err.message);
  } else {
    console.log('Verified JWT:', decoded);
  }
});

```




jwt.decode -> return either the decoded string or null
jwt.verify -> return the `jwtwebtoken`  or throw an exception -> which needs to be handled in try-catch block