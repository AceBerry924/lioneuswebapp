const passwordValidator = require('password-validator');
 
// Create a schema
const schema = new passwordValidator();
 
// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.is().not().oneOf(['Passw0rd', 'Password123','18Atcskd2w','1Q2w3e4r','3Rjs1la7qe','1Q2w3e4r5t','1Q2w3e','myNoob1']); // Blacklist these values

function validate(password = ''){
    const list = schema.validate(password , {list: true})
    const messages = list.map( rule  => {
        switch(rule){
            case 'min':
                return 'Password must be at least 8 characters'
            case 'max':
                return 'Password must be at least 8 characters'
            case 'uppercase':
                return 'Password must have an uppercase'
            case 'lowercase':
                return 'Password must a lowercase'
            case 'digits': 
                return 'Password must have a number'
            default:
                return ''
        }
    })

    const result = messages.join('.')
    return result;
}

module.exports = {
    validate
}
