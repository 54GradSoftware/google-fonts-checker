/// <reference types="cypress" />
import {messages} from '../../frontend/src/languages'

describe('Live Google Fonts Checker', () => {
    beforeEach(() => {
        cy.visit('https://google-fonts-checker.54gradsoftware.de/de-DE')
  })
  it('Check processing and negative google fonts result', () => {
    cy.get('.TrackerSearch form input')
      .type('54gradsoftware.de').should('have.value', '54gradsoftware.de')

    cy.get('button[type="submit"]').click()
    cy.get('.info').should('have.text', 'processing')
    cy.get('.TracingResult p').should('have.text', messages['de-DE'].result.noticeFalse)
  })
  it('Check positive google fonts result', () => {
    cy.get('.TrackerSearch form input').type('https://fonts.google.com/specimen/Roboto')
    cy.get('button[type="submit"]').click()
    cy.get('.trackerList h3').should('have.text', messages['de-DE'].result.noticeTrue)
  })
})