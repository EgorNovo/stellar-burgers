describe('Тест модальных окон', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/');

    cy.get('[data-cy-ingredient]').first().as('ingredient');
    cy.get('@ingredient').click();
  });

  it('Открытие модального окна', () => {
    cy.get('[data-cy-modal-open]').should('be.visible');
  });

  it('Закрытие модального окна нажатием на крестик', () => {
    cy.get('[data-cy-modal-close]').first().as('buttonClose');
    cy.get('@buttonClose').click();
    cy.get('[data-cy-modal-open]').should('not.exist');
  });

  it('Закрытие модального окна нажатием на оверлeй', () => {
    cy.get('[data-cy-modal-overlay]').as('overlay');
    cy.get('@overlay').click({ force: true });
    cy.get('[data-cy-modal-open]').should('not.exist');
  });
});
