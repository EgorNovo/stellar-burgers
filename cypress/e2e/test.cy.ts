import * as testData from '../fixtures/ingredients.json';
import * as SELECTORS from '../fixtures/selectors';

Cypress.Commands.add('clickButton', (name: string, flag?: boolean) => {
  cy.get(name).first().click();
});

describe('Доступность приложения', () => {
  it('саит доступен по адресу http://localhost:4000/ ', () => {
    cy.visit('/');
  });
});

describe('Тест взаимодействия с конструктором бургера', () => {
  it('Добавить булку и  добавить/удалить ингредиенты', () => {
    cy.visit('/');

    // Добавили булку
    cy.clickButton(SELECTORS.ADD_INGREDIENT_BUTTON_BUNS);
    cy.get(SELECTORS.BURGER_CONSTRUCTOR_BUN).as('constructorBun');
    cy.get('@constructorBun').should('have.length', 1);
    // Еще раз добави булку, проверка что булок не будет две
    cy.clickButton(SELECTORS.ADD_INGREDIENT_BUTTON_BUNS);
    cy.get('@constructorBun').should('have.length', 1);

    // Добавим игредиент
    cy.clickButton(SELECTORS.ADD_INGREDIENT_BUTTON_MAIN);
    cy.get(SELECTORS.BURGER_CONSTRUCTOR_LI).as('constructorLi');
    cy.get('@constructorLi').should('have.length', 1);
    // Добавим второй игредиент
    cy.clickButton(SELECTORS.ADD_INGREDIENT_BUTTON_MAIN);
    cy.get('@constructorLi').should('have.length', 2);
    // Удалим ингредиент
    cy.get(SELECTORS.DELETE_BUTTON)
      .first()
      .children()
      .children()
      .last()
      .click();
    cy.get('@constructorLi').should('have.length', 1);
  });
});

describe('Проверка массива ингредиентов', () => {
  const URL = Cypress.env('BURGER_API_URL');

  it('Массив ингредиентов полученых с сервера должен совпадать с моковыми данными', () => {
    cy.intercept(`${URL}/ingredients`).as('matchedURL');
    cy.visit('/');

    cy.wait('@matchedURL').then(({ response }) => {
      expect(response?.body.data).to.deep.equal(testData.ingredients);
    });
  });
});

describe('Тест модальных окон', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clickButton(SELECTORS.INGREDIENT);
  });

  it('Открытие модального окна', () => {
    cy.get(SELECTORS.MODAL_WINDOWS_SELECTOR).should('be.visible');
  });

  it('Закрытие модального окна нажатием на крестик', () => {
    cy.clickButton(SELECTORS.MODAL_CLOSE);
    cy.get(SELECTORS.MODAL_WINDOWS_SELECTOR).should('not.exist');
  });

  it('Закрытие модального окна нажатием на оверлeй', () => {
    cy.get(SELECTORS.MODAL_OVERLAY).as('overlay');
    cy.get('@overlay').click({ force: true });
    cy.get(SELECTORS.MODAL_WINDOWS_SELECTOR).should('not.exist');
  });
});

describe('Тест создания заказа', () => {
  const URL = Cypress.env('BURGER_API_URL');

  beforeEach(() => {
    localStorage.setItem('refreshToken', 'refreshToken');
    cy.setCookie('accessToken', 'accessToken');

    cy.fixture('user.json').then((user) => {
      cy.visit('/');

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
    // Собираем заказ
    cy.clickButton(SELECTORS.ADD_INGREDIENT_BUTTON_BUNS);
    cy.clickButton(SELECTORS.ADD_INGREDIENT_BUTTON_MAIN);
    // Оформляем заказ
    cy.clickButton(SELECTORS.ORDER_BUTTON);

    cy.fixture('order.json').then((newOrder) => {
      cy.intercept({ method: 'POST', url: `${URL}/orders` }, newOrder).as(
        'createOrder'
      );
      cy.wait('@createOrder');
      // Проверяем номер заказа и открытие модального окна
      cy.get(SELECTORS.MODAL_WINDOWS_SELECTOR).should('be.visible');
      cy.get(SELECTORS.ORDER_NUMBER).should('contain', newOrder.order.number);
      // Закрываем модальное окно
      cy.clickButton(SELECTORS.MODAL_CLOSE);

      cy.get(SELECTORS.MODAL_WINDOWS_SELECTOR).should('not.exist');
      // Проверяется, что конструктор пуст
      cy.get(SELECTORS.BURGER_CONSTRUCTOR_LI).should('not.exist');
      cy.get(SELECTORS.BURGER_CONSTRUCTOR_BUN).should('not.exist');
    });
  });
});
