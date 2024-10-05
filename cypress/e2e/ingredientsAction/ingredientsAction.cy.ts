describe('Тест взаимодействия с конструктором бургера', () => {
  it('Добавить булку и  добавить/удалить ингредиенты', () => {
    cy.visit('http://localhost:4000/');

    cy.get(`[class~=add-ingredient-button-buns]`).first().as('buttonBuns');
    cy.get(`[class~=add-ingredient-button-main]`).first().as('buttonMain');

    // Добавили булку
    cy.get('@buttonBuns').click();
    cy.get(`[data-cy-burger-constructor-bun]`).as('constructorBun');
    cy.get('@constructorBun').should('have.length', 1);
    // Еще раз добави булку, проверка что булок не будет две
    cy.get('@buttonBuns').click();
    cy.get('@constructorBun').should('have.length', 1);

    // Добавим игредиент
    cy.get('@buttonMain').click();
    cy.get(`[data-cy-burger-constructor-li]`).as('constructorLi');
    cy.get('@constructorLi').should('have.length', 1);
    // Добавим второй игредиент
    cy.get('@buttonMain').click();
    cy.get('@constructorLi').should('have.length', 2);
    // Удалим ингредиент
    cy.get('[class~=data-cy-ingredient-main-delete-button]')
      .first()
      .children()
      .children()
      .last()
      .click();
    cy.get('@constructorLi').should('have.length', 1);
  });
});
