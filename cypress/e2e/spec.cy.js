import { errorMessages } from "../../src/comp/Register";

describe("Main Tests", () => {
  describe.skip("Expected Results", () => {
    it("Name Field Char min", () => {
      cy.visit("http://localhost:5173/");
      cy.get("#ad").type("em");
      cy.contains(errorMessages.ad);
    });
    it("Surname Field Char min", () => {
      cy.visit("http://localhost:5173/");
      cy.get('[data-cy="soyad-input"]').type("12");
      cy.contains(errorMessages.soyad);
    });
    it("Email Field Chars", () => {
      cy.visit("http://localhost:5173/");
      cy.get('[data-cy="email-input"]').type("asd");
      cy.contains(errorMessages.email);
    });
    it("Pas Field Chars", () => {
      cy.visit("http://localhost:5173/");
      cy.get('[data-cy="password-input"]').type("asd");
      cy.contains(errorMessages.password);
    });
  });
  describe("Buton Activated?", () => {
    it("Buton activation", () => {
      cy.visit("http://localhost:5173/");
      cy.get("#ad").type("Fatih");
      cy.get('[data-cy="soyad-input"]').type("Ozcan");
      cy.get('[data-cy="email-input"]').type("xx@xx.com");
      cy.get('[data-cy="password-input"]').type("123asdQWE*");
      cy.get('[data-cy="submit-btn"]').should("be.enabled");
    });
  });
  describe("ID provided?", () => {
    it("ID probided", () => {
      cy.visit("http://localhost:5173/");
      cy.get("#ad").type("Fatih");
      cy.get('[data-cy="soyad-input"]').type("Ozcan");
      cy.get('[data-cy="email-input"]').type("xx@xx.com");
      cy.get('[data-cy="password-input"]').type("123asdQWE*");
      cy.get('[data-cy="submit-btn"]').click();
      cy.get('[data-cy="id-value"]').should("be.visible");
    });
  });
});
