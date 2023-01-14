# Validation of Credit Card Numbers

## This is a simple validation program that uses regular expressions to check the type of credit card you have based on the credit card number that you inputted

## Description of the Regex pattern used in the code

The first instance was a visa regex pattern
A visa card always starts with "4" and comprises of 13-16 digits
The caret symbol, ^ indicates that the expression must start with a particular character, in this case, "4". The \d symbol indicates that the expression must be numbers(digits). {12,15} indicates that in addition to "4" that started the expression, there must be either 12, 13, 14 or 15 other digits making it a total of either 13, 14, 15 or 16 digits. The "$" symbol is to indicate that it must end with a digit.

The second instance was a masterCard regex pattern
A master card always starts with "51,52,53,54,55" and comprises of 16 digits
The caret symbol, ^ indicates that the expression must start with a particular character, in this case, "51". The \d symbol indicates that the expression must be numbers(digits). {14} indicates that in addition to "51" that started the expression, there must be 14 other digits making it a total of 16 digits. The "$" symbol is to indicate that it must end with a digit.

The third instance was a verve regex pattern
A verve card always starts with "50" and comprises of 18-19 digits
The caret symbol, ^ indicates that the expression must start with a particular character, in this case, "50". The \d symbol indicates that the expression must be numbers(digits). {16,17} indicates that in addition to "50" that started the expression, there must be either 16 or 17 other digits making it a total of either 18 or 19 digits. The "$" symbol is to indicate that it must end with a digit.

## Pre-requisites for running the code

1. The User needs to install node js
2. The user needs to install prompt-sync on his/her terminal by running the following command, "npm install prompt-sync".
