export const reducerINIT = {
  ingredients: {
    ingredients: [],
    isLoading: false,
    error: {}
  },
  authorization: {
    user: {
      name: '',
      email: ''
    },
    isAuthenticated: false,
    isAuthorized: false
  },
  feeds: {
    isLoading: false,
    error: '',
    data: {
      orders: [],
      total: 0,
      totalToday: 0
    }
  },
  builder: {
    bun: null,
    ingredients: []
  },
  order: {
    success: false,
    orderRequest: false,
    orderModalData: null,
    orders: []
  }
};

export const ingredientData = {
  _id: '643d69a5c3f7b9001cfa093e',
  name: 'Филе Люминесцентного тетраодонтимформа',
  type: 'main',
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: 'https://code.s3.yandex.net/react/code/meat-03.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
  __v: 0,
  id: 'test-id-143923572-06'
};

export const ingredientsData = [
  {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    __v: 0,
    id: '1'
  },
  {
    _id: '643d69a5c3f7b9001cfa0942',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    __v: 0,
    id: '2'
  },
  {
    _id: '643d69a5c3f7b9001cfa0943',
    name: 'Соус фирменный Space Sauce',
    type: 'sauce',
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
    __v: 0,
    id: '3'
  },
  {
    _id: '643d69a5c3f7b9001cfa093f',
    name: 'Мясо бессмертных моллюсков Protostomia',
    type: 'main',
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: 'https://code.s3.yandex.net/react/code/meat-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
    __v: 0,
    id: '4'
  }
];

export const ingredientsDataReplace = [
  {
    _id: '643d69a5c3f7b9001cfa0942',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    __v: 0,
    id: '2'
  },
  {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    __v: 0,
    id: '1'
  },
  {
    _id: '643d69a5c3f7b9001cfa0943',
    name: 'Соус фирменный Space Sauce',
    type: 'sauce',
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png',
    __v: 0,
    id: '3'
  },
  {
    _id: '643d69a5c3f7b9001cfa093f',
    name: 'Мясо бессмертных моллюсков Protostomia',
    type: 'main',
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: 'https://code.s3.yandex.net/react/code/meat-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
    __v: 0,
    id: '4'
  }
];

export const feedData = {
  success: true,
  orders: [
    {
      _id: '6700b67113a2b7001c8efec2',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T03:45:53.279Z',
      updatedAt: '2024-10-05T03:45:54.138Z',
      number: 55145
    },
    {
      _id: '6700b65713a2b7001c8efec1',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T03:45:27.914Z',
      updatedAt: '2024-10-05T03:45:28.695Z',
      number: 55144
    },
    {
      _id: '67009f1f13a2b7001c8efea6',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T02:06:23.115Z',
      updatedAt: '2024-10-05T02:06:23.826Z',
      number: 55143
    },
    {
      _id: '67009ec213a2b7001c8efea5',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T02:04:50.385Z',
      updatedAt: '2024-10-05T02:04:51.390Z',
      number: 55142
    },
    {
      _id: '67009d5113a2b7001c8efea3',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T01:58:41.215Z',
      updatedAt: '2024-10-05T01:58:42.148Z',
      number: 55141
    },
    {
      _id: '67009b8913a2b7001c8efea1',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский люминесцентный бургер',
      createdAt: '2024-10-05T01:51:05.593Z',
      updatedAt: '2024-10-05T01:51:06.547Z',
      number: 55140
    },
    {
      _id: '67009b5913a2b7001c8efea0',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T01:50:17.023Z',
      updatedAt: '2024-10-05T01:50:17.895Z',
      number: 55139
    },
    {
      _id: '67009ac113a2b7001c8efe9f',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский бургер',
      createdAt: '2024-10-05T01:47:45.558Z',
      updatedAt: '2024-10-05T01:47:46.499Z',
      number: 55138
    },
    {
      _id: '6700885313a2b7001c8efe8c',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-10-05T00:29:07.607Z',
      updatedAt: '2024-10-05T00:29:08.280Z',
      number: 55137
    },
    {
      _id: '6700784a13a2b7001c8efe81',
      ingredients: ['643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бургер',
      createdAt: '2024-10-04T23:20:42.981Z',
      updatedAt: '2024-10-04T23:20:43.928Z',
      number: 55136
    },
    {
      _id: '67006da013a2b7001c8efe78',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-10-04T22:35:12.835Z',
      updatedAt: '2024-10-04T22:35:13.707Z',
      number: 55135
    },
    {
      _id: '6700601d13a2b7001c8efe6e',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T21:37:33.474Z',
      updatedAt: '2024-10-04T21:37:34.434Z',
      number: 55134
    },
    {
      _id: '6700509913a2b7001c8efe5f',
      ingredients: [
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Метеоритный флюоресцентный био-марсианский бессмертный бургер',
      createdAt: '2024-10-04T20:31:21.395Z',
      updatedAt: '2024-10-04T20:31:22.325Z',
      number: 55133
    },
    {
      _id: '67003d2013a2b7001c8efe3b',
      ingredients: [
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный био-марсианский бургер',
      createdAt: '2024-10-04T19:08:16.588Z',
      updatedAt: '2024-10-04T19:08:17.539Z',
      number: 55132
    },
    {
      _id: '67003adb13a2b7001c8efe34',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный антарианский астероидный бессмертный spicy метеоритный бургер',
      createdAt: '2024-10-04T18:58:35.520Z',
      updatedAt: '2024-10-04T18:58:36.410Z',
      number: 55131
    },
    {
      _id: '67003a6613a2b7001c8efe32',
      ingredients: ['643d69a5c3f7b9001cfa093f', '643d69a5c3f7b9001cfa093d'],
      status: 'done',
      name: 'Флюоресцентный бессмертный бургер',
      createdAt: '2024-10-04T18:56:38.333Z',
      updatedAt: '2024-10-04T18:56:39.241Z',
      number: 55130
    },
    {
      _id: '670037e413a2b7001c8efe2d',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный space альфа-сахаридный spicy био-марсианский бургер',
      createdAt: '2024-10-04T18:45:56.245Z',
      updatedAt: '2024-10-04T18:45:57.032Z',
      number: 55129
    },
    {
      _id: '67002df413a2b7001c8efe19',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный био-марсианский бургер',
      createdAt: '2024-10-04T18:03:32.019Z',
      updatedAt: '2024-10-04T18:03:32.941Z',
      number: 55128
    },
    {
      _id: '67002bd813a2b7001c8efe15',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T17:54:32.624Z',
      updatedAt: '2024-10-04T17:54:34.489Z',
      number: 55127
    },
    {
      _id: '67002b2213a2b7001c8efe10',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-10-04T17:51:30.869Z',
      updatedAt: '2024-10-04T17:51:31.645Z',
      number: 55126
    },
    {
      _id: '6700262b13a2b7001c8efdfa',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-10-04T17:30:19.166Z',
      updatedAt: '2024-10-04T17:30:19.987Z',
      number: 55125
    },
    {
      _id: '670025c113a2b7001c8efdf7',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T17:28:33.907Z',
      updatedAt: '2024-10-04T17:28:34.904Z',
      number: 55124
    },
    {
      _id: '670024ca13a2b7001c8efdf4',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-10-04T17:24:26.901Z',
      updatedAt: '2024-10-04T17:24:27.798Z',
      number: 55123
    },
    {
      _id: '6700249a13a2b7001c8efdf2',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный бессмертный бургер',
      createdAt: '2024-10-04T17:23:38.874Z',
      updatedAt: '2024-10-04T17:23:39.702Z',
      number: 55122
    },
    {
      _id: '6700247613a2b7001c8efdf1',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный био-марсианский бургер',
      createdAt: '2024-10-04T17:23:02.724Z',
      updatedAt: '2024-10-04T17:23:03.533Z',
      number: 55121
    },
    {
      _id: '6700245d13a2b7001c8efdf0',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный био-марсианский бургер',
      createdAt: '2024-10-04T17:22:37.354Z',
      updatedAt: '2024-10-04T17:22:38.053Z',
      number: 55120
    },
    {
      _id: '6700242f13a2b7001c8efdef',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Метеоритный флюоресцентный био-марсианский бессмертный бургер',
      createdAt: '2024-10-04T17:21:51.949Z',
      updatedAt: '2024-10-04T17:21:52.746Z',
      number: 55119
    },
    {
      _id: '6700237113a2b7001c8efdee',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Метеоритный флюоресцентный люминесцентный бессмертный бургер',
      createdAt: '2024-10-04T17:18:41.610Z',
      updatedAt: '2024-10-04T17:18:42.447Z',
      number: 55118
    },
    {
      _id: '6700233e13a2b7001c8efdec',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Краторный био-марсианский люминесцентный метеоритный бургер',
      createdAt: '2024-10-04T17:17:50.845Z',
      updatedAt: '2024-10-04T17:17:51.606Z',
      number: 55117
    },
    {
      _id: '6700231a13a2b7001c8efdeb',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-10-04T17:17:14.809Z',
      updatedAt: '2024-10-04T17:17:15.617Z',
      number: 55116
    },
    {
      _id: '67001a9513a2b7001c8efdd1',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Метеоритный флюоресцентный бессмертный бургер',
      createdAt: '2024-10-04T16:40:53.528Z',
      updatedAt: '2024-10-04T16:40:54.312Z',
      number: 55115
    },
    {
      _id: '670019a813a2b7001c8efdce',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa094a'
      ],
      status: 'done',
      name: 'Астероидный space флюоресцентный био-марсианский бургер',
      createdAt: '2024-10-04T16:36:56.948Z',
      updatedAt: '2024-10-04T16:36:57.789Z',
      number: 55114
    },
    {
      _id: '6700197513a2b7001c8efdc9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-10-04T16:36:05.837Z',
      updatedAt: '2024-10-04T16:36:06.732Z',
      number: 55113
    },
    {
      _id: '670017f613a2b7001c8efdc0',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T16:29:42.502Z',
      updatedAt: '2024-10-04T16:29:43.445Z',
      number: 55112
    },
    {
      _id: '670017cc13a2b7001c8efdbe',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T16:29:00.080Z',
      updatedAt: '2024-10-04T16:29:00.829Z',
      number: 55111
    },
    {
      _id: '6700177413a2b7001c8efdbd',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa094a'
      ],
      status: 'done',
      name: 'Астероидный флюоресцентный spicy люминесцентный бургер',
      createdAt: '2024-10-04T16:27:32.695Z',
      updatedAt: '2024-10-04T16:27:33.619Z',
      number: 55110
    },
    {
      _id: '670016cc13a2b7001c8efdbc',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T16:24:44.117Z',
      updatedAt: '2024-10-04T16:24:45.004Z',
      number: 55109
    },
    {
      _id: '6700123613a2b7001c8efdab',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный традиционный-галактический антарианский бургер',
      createdAt: '2024-10-04T16:05:10.374Z',
      updatedAt: '2024-10-04T16:05:11.286Z',
      number: 55108
    },
    {
      _id: '6700122013a2b7001c8efda9',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный традиционный-галактический антарианский бургер',
      createdAt: '2024-10-04T16:04:48.323Z',
      updatedAt: '2024-10-04T16:04:49.140Z',
      number: 55107
    },
    {
      _id: '6700110413a2b7001c8efd9d',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный фалленианский люминесцентный бургер',
      createdAt: '2024-10-04T16:00:04.741Z',
      updatedAt: '2024-10-04T16:00:05.580Z',
      number: 55106
    },
    {
      _id: '670010e813a2b7001c8efd9c',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093e',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный фалленианский люминесцентный бургер',
      createdAt: '2024-10-04T15:59:36.254Z',
      updatedAt: '2024-10-04T15:59:37.093Z',
      number: 55105
    },
    {
      _id: '6700100e13a2b7001c8efd97',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T15:55:58.379Z',
      updatedAt: '2024-10-04T15:55:59.189Z',
      number: 55104
    },
    {
      _id: '67000ff513a2b7001c8efd96',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T15:55:33.578Z',
      updatedAt: '2024-10-04T15:55:34.305Z',
      number: 55103
    },
    {
      _id: '67000fad13a2b7001c8efd95',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-10-04T15:54:21.431Z',
      updatedAt: '2024-10-04T15:54:22.239Z',
      number: 55102
    },
    {
      _id: '67000f3613a2b7001c8efd93',
      ingredients: [
        '643d69a5c3f7b9001cfa093c',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0941',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0949',
        '643d69a5c3f7b9001cfa093c'
      ],
      status: 'done',
      name: 'Астероидный краторный минеральный экзо-плантаго spicy био-марсианский бургер',
      createdAt: '2024-10-04T15:52:22.964Z',
      updatedAt: '2024-10-04T15:52:23.683Z',
      number: 55101
    },
    {
      _id: '67000e7413a2b7001c8efd8e',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-10-04T15:49:08.439Z',
      updatedAt: '2024-10-04T15:49:09.379Z',
      number: 55100
    },
    {
      _id: '67000e3313a2b7001c8efd8b',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T15:48:03.624Z',
      updatedAt: '2024-10-04T15:48:04.557Z',
      number: 55099
    },
    {
      _id: '67000d9d13a2b7001c8efd89',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-10-04T15:45:33.294Z',
      updatedAt: '2024-10-04T15:45:34.131Z',
      number: 55098
    },
    {
      _id: '67000d2413a2b7001c8efd88',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный антарианский бургер',
      createdAt: '2024-10-04T15:43:32.161Z',
      updatedAt: '2024-10-04T15:43:33.041Z',
      number: 55097
    },
    {
      _id: '67000c6113a2b7001c8efd83',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-10-04T15:40:17.882Z',
      updatedAt: '2024-10-04T15:40:18.722Z',
      number: 55096
    }
  ],
  total: 54771,
  totalToday: 202
};
