const prompt = require("prompt-sync")();


function validateCreditCard() {
    const descriptionMessage = "Welcome! This program is to check the type of credit card you own using the number on your credit card. Please note that your information is absolutely confidential and we don't store your card information. To use this program, simply input the number of your card and know the type of your card in seconds. Thank you."
    console.log(descriptionMessage);
    const creditCardNumber = prompt("Please input your card Number without spaces: ");
    const cardNumber = parseInt(creditCardNumber);

    const visaCard = /^4\d{12,15}$/
    const masterCard = /^5[0-5]\d{14}$/
    const verve = /^50\d{16,17}$/

    if (visaCard.test(cardNumber)) {
        console.log("This is a visa card and can be used both in local and international transcations. It has 13 or 16 digits depending on the bank that issued the card");
    } else if (masterCard.test(cardNumber)) {
        console.log("This is a master card and can be used both in local and international transcations. It has 16 digits");
    } else if (verve.test(cardNumber)) {
        console.log("This is verve card and can only be used in local transcations. It has either 18 or 19 digits depending on the bank that issued the card");
    } else {
        console.log("Invalid credit card number");
    }
}
validateCreditCard();

/* Description of the pattern above

The first instance was a visa regex pattern
A visa card always starts with "4" and comprises of 13-16 digits 
The caret symbol, ^ indicates that the expression must start with a particular character, in this case, "4". The \d symbol indicates that expression must be number(digits). {12,15} indicates that in addition to "4" that started the expression, there must be either 12, 13, 14 or 15 other digits making it a total of either 13, 14, 15 or 16 digits. The "$" symbol is to indicate that it must end with a digit. 

The second instance was a masterCard regex pattern
A master card always starts with "51,52,53,54,55" and comprises of 16 digits 
The caret symbol, ^ indicates that the expression must start with a particular character, in this case, "51". The \d symbol indicates that expression must be number(digits). {14} indicates that in addition to "51" that started the expression, there must be 14 other digits making it a total of 16 digits. The "$" symbol is to indicate that it must end with a digit. 

The third instance was a verve regex pattern
A verve card always starts with "50" and comprises of 18-19 digits 
The caret symbol, ^ indicates that the expression must start with a particular character, in this case, "50". The \d symbol indicates that expression must be number(digits). {16,17} indicates that in addition to "50" that started the expression, there must be eiher 16 or 17 other digits making it a total of either 18 or 19 digits. The "$" symbol is to indicate that it must end with a digit. 
*/