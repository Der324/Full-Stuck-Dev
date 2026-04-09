function maskEmail(email) {
  const atIndex = email.indexof("@");
  const userName = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = userName[0];
  const lastChar = userName[userName.length - 1];
  const maskedPart = "*".repeat(userName.length - 2);

  return firstChar + maskedPart + lastChar + domain;
}

const email = "ntd60996@gmail.com"
console.log(maskEmail(email));