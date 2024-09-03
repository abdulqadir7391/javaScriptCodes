const accountID = 10003
let accountEmail = "abdul@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState
// accountID = 123 // not allowed; TypeError: Assignment to constant variable
/*
Prefer not to use var for variable diclaration
Because of issue in Block space and Functional space    
*/
console.log(accountID)
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
