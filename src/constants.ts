export const BACKEND_URL = "https://gateway.scan-interfax.ru";
export const LOGIN_ENDPOINT = "/api/v1/account/login";
export const LIMITS_ENDPOINT = "/api/v1/account/info";
export const HISTOGRAMS_ENDPOINT = "/api/v1/objectsearch/histograms";
export const OBJECTSEARCH_ENDPOINT = "/api/v1/objectsearch";
export const DOCUMENT_ENDPOINT = "/api/v1/documents";

export const REQUEST_TIMEOUT = 5000;
export const PRIVILEGES_ON_PAGE = 3;
export const PRIVILEGES_ON_PAGE_MOBILE = 1;
export const MOBILE_DESCTOP_FOR_PRIVELEGES = 990;
export const HISTOGRAM_SCROLL_STEP = 100;
export const DEFAULT_LIMITS = 0;
export const DOCUMENTS_PER_CLICK = 10;
export const MAX_DOCUMENTS_NUMBER = 1000;

export const AUTH_ERROR = "Ошибка авторизации";
export const LOAD_ERROR = "Ошибка загрузки данных";
export const PASSWORD_ERROR =
  "Пароль должен содержать хотя бы одну букву и цифру";
export const EMPTY_INN_ERROR = "ИНН пуст";
export const STRUCTURE_INN_ERROR = "ИНН может состоять только из цифр";
export const LENGTH_INN_ERROR = "ИНН может состоять только из 10 цифр";
export const CONTROL_NUM_INN_ERROR = "Ошибка контрольного числа";
export const WRONG_DATA_ERROR = "Введите корректные данные";
export const RESULT_LENGTH_ERROR = "Количество от 1 до 1000";

export enum AppRoute {
  Main = "/",
  Auth = "/login",
  Search = "/search",
  Results = "/results",
}

export const MenuItems = [
  { item: "Главная", link: "#" },
  { item: "Тарифы", link: "##" },
  { item: "FAQ", link: "###" },
];

export const PrivilegesItems = [
  {
    id: 1,
    item: "Высокая и оперативная скорость обработки заявки",
    backgroundImage: "item1",
  },
  {
    id: 2,
    item: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    backgroundImage: "item2",
  },
  {
    id: 3,
    item: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
    backgroundImage: "item3",
  },
  {
    id: 4,
    item: "Не подлежащих разглашению по федеральному законодательству",
    backgroundImage: "item3",
  },
];

export const TarifItems = [
  {
    id: 1,
    title: "Beginner",
    description: "Для небольшого исследования",
    price: 799,
    discount: 1200,
    installment: 150,
    options: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7",
    ],
    type: "beginner",
    active: true,
  },
  {
    id: 2,
    title: "Pro",
    description: "Для HR и фрилансеров",
    price: 1299,
    discount: 2600,
    installment: 279,
    options: [
      "Все пункты тарифа Beginner",
      "Экспорт истории",
      "Рекомендации по приоритетам",
    ],
    type: "pro",
    active: false,
  },
  {
    id: 3,
    title: "Business",
    description: "Для корпоративных клиентов",
    price: 2379,
    discount: 3700,
    options: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка",
    ],
    type: "business",
    active: false,
  },
];

export const CheckboxItems = [
  { id: "1", item: "Признак максимальной полноты" },
  { id: "2", item: "Упоминания в бизнес-контексте" },
  { id: "3", item: "Главная роль в публикации" },
  { id: "4", item: "Публикации только с риск-факторами" },
  { id: "5", item: "Включать технические новости рынков" },
  { id: "6", item: "Включать анонсы и календари" },
  { id: "7", item: "Включать сводки новостей" },
];

export const LoginSourceItem = [
  {
    name: "Google",
    image: "public/img/auth-main-google.svg",
    url: "#",
  },
  {
    name: "Facebook",
    image: "public/img/auth-main-facebook.svg",
    url: "#",
  },
  {
    name: "Yandex",
    image: "public/img/auth-main-yandex.svg",
    url: "#",
  },
];

export enum SubmitStatus {
  Null,
  Pending,
  Fulfilled,
  Error,
}

export enum AuthorizationStatus {
  Auth = "AUTH",
  NoAuth = "NO_AUTH",
  Unknown = "UNKNOWN",
  Submitting = "SUBMITTING",
}
