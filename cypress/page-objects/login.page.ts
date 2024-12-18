class LoginPage {
  get user(): { firstName: string, lastName: string, email: string, password: string } {
    return {
      "firstName": "User",
      "lastName": "Test",
      "email": "brunobzs+test@gmail.com",
      "password": "Test1234"
    }
  }

  get loginPanel(): string {
    return '.panel.wrapper > .panel'
  }

  get emailInput(): string {
    return '#email';
  }

  get passwordInput(): string {
    return '#pass';
  }

  get signInButton(): string {
    return '#send2';
  }

  get errorMessage(): string {
    return '.message-error';
  }

}

export default new LoginPage();
