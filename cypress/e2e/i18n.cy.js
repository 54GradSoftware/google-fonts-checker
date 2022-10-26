/// <reference types="cypress" />
import {messages} from '../../frontend/src/languages'
describe('Live Google Fonts Checker', () => {
    beforeEach(() => {
        cy.visit('https://google-fonts-checker.54gradsoftware.de/de-DE')
  })
  it('Check if h1 content is correct text/language', () => {
    cy.get('h1').first().should('have.text', messages['de-DE'].search.headline)
  })
  it('Check language switch', () => {
    cy.get('.languageOption').first().click()
    cy.get('h1').first().should('have.text', messages['en-US'].search.headline)
  })    
})