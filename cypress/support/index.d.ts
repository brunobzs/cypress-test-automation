interface LoginParams {
  email: string;
  password: string;
}

declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(params: LoginParams): void
  }

  interface Chainable<Subject = any> {
    accessWebPage(): void
  }
}