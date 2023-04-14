export function validatePhoneWithDDD(phone: string) {
  return /(\([0-9]{2})\)(\s)((9[0-9]{4}-[0-9]{4}))$/.test(phone);
}
