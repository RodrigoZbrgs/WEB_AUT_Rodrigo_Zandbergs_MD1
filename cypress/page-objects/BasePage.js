export class BasePage {
  static visit() {
    return cy.visit('https://demoqa.com/selectable');
  }
}