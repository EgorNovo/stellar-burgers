import * as testData from '../../fixtures/ingredients.json';

describe('Проверка массива ингредиентов', () => {
  const URL = Cypress.env('BURGER_API_URL');

  it('Массив ингредиентов полученых с сервера должен совпадать с моковыми данными', () => {
    cy.intercept(`${URL}/ingredients`).as('matchedURL');
    cy.visit('http://localhost:4000/');

    cy.wait('@matchedURL').then(({ response }) => {
      expect(response?.body.data).to.deep.equal(testData.ingredients);
    });
  });
});
