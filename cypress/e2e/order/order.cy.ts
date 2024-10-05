describe('Тест создания заказа', () => {
  const URL = Cypress.env('BURGER_API_URL');

  beforeEach(() => {
    localStorage.setItem('refreshToken', 'refreshToken');
    cy.setCookie('accessToken', 'accessToken');

    cy.fixture('user.json').then((user) => {
      cy.visit('http://localhost:4000/');

      cy.intercept(
        {
          method: 'GET',
          url: `${URL}/auth/user`
        },
        user
      ).as('getUser');
      cy.wait('@getUser');
    });
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

  it('Собираем и оформляем заказ', () => {
    cy.get(`[data-cy-burger-constructor-order-button]`).as('buttonOrder');
    cy.get(`[class~=add-ingredient-button-buns]`).first().as('buttonBuns');
    cy.get(`[class~=add-ingredient-button-main]`).first().as('buttonMain');
    // Собираем заказ
    cy.get('@buttonBuns').click();
    cy.get('@buttonMain').click();
    // Оформляем заказ
    cy.get('@buttonOrder').click();

    cy.fixture('order.json').then((newOrder) => {
      cy.intercept({ method: 'POST', url: `${URL}/orders` }, newOrder).as(
        'createOrder'
      );
      cy.wait('@createOrder');
      // Проверяем номер заказа и открытие модального окна
      cy.get('[data-cy-modal-open]').should('be.visible');
      cy.get('[data-cy-order-number]').should('contain', newOrder.order.number);
      // Закрываем модальное окно
      cy.get('[data-cy-modal-close]').first().as('buttonClose');
      cy.get('@buttonClose').click();
      cy.get('[data-cy-modal-open]').should('not.exist');
      // Проверяется, что конструктор пуст
      cy.get(`[data-cy-burger-constructor-li]`).should('not.exist');
      cy.get(`[data-cy-burger-constructor-bun]`).should('not.exist');
    });
  });
});
