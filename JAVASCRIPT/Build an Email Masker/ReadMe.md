# Objective

Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a function named maskEmail that takes email as an argument.
Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
Outside the function, declare a variable named email to store the email address you want to mask.
Call the maskEmail function with the email variable and output the result to the console.
maskEmail("<apple.pie@example.com>") should return "a*******<e@example.com>".
maskEmail("<freecodecamp@example.com>") should return "f**********<p@example.com>".
maskEmail("<info@test.dev>") should return "i**<o@test.dev>".
maskEmail("<user@domain.org>") should return "u**<r@domain.org>".
