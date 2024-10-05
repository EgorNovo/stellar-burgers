describe('Доступность приложения', () => {
  it('саит доступен по адресу http://localhost:4000/ ', () => {
    cy.visit('http://localhost:4000/');
  });
});
