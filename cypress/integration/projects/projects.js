import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:8080/projects/'
Given('I open the projects page', () => {
  cy.visit(url)
})
