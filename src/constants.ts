export const BACKEND_URL = "https://gateway.scan-interfax.ru";
export const LOGIN_ENDPOINT = "/api/v1/account/login";
export const LIMITS_ENDPOINT = "/api/v1/account/info";
export const HISTOGRAMS_ENDPOINT = "/api/v1/objectsearch/histograms";
export const OBJECTSEARCH_ENDPOINT = "/api/v1/objectsearch";
export const DOCUMENT_ENDPOINT = "/api/v1/documents";
export const REQUEST_TIMEOUT = 5000;

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
  },
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

export const PRIVILEGES_ON_PAGE = 3;
export const PRIVILEGES_ON_PAGE_MOBILE = 1;
export const MOBILE_DESCTOP_FOR_PRIVELEGES = 990;

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

export const AUTH_ERROR = "Ошибка авторизации";
export const LOAD_ERROR = "Ошибка загрузки данных";
