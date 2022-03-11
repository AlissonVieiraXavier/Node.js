export default class dataForms {
  inputname;
  inputEmail;
  textArea;

  get email() {
    return this.inputEmail;
  }
  get message() {
    return this.textArea;
  }
  constructor(nome, email, message) {
    this.inputname = nome;
    this.inputEmail = email;
    this.textArea = message;
  }
}
