import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (titleInclusion) => {
  cy.title().should('include', titleInclusion)
})