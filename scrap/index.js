//Credit card number, 16 digits cannot start with 0, in a str ("")
let creditCard = str => /^([1-9]{4})\s(\d{4})\s(\d{4})\s(\d{4})$/.test(str);

//Credit card expiration date (two numbers /two numbers), in a str("")
let expirationDate = str => /^(\d{2})[/](\d{2})$/.test(str);

//Credit card security code on back of card (2-3 digits), in a str("")
let securityCode = str => /^(\d){3,4}/.test(str);