export type TarifType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  installment?: number | null;
  options: string[];
  type: string;
  active: boolean;
};

export type LoginSourceItemType = {
  name: string;
  image: string;
  url: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  expire: string;
};

export type UserLimits = {
  usedCompanyCount: number;
  companyLimit: number;
};
export type HistogramRequestData = {
  inn: string;
  tonality: string;
  results: number;
  dateFrom: string;
  dateTo: string;
};

export type HistogramDataPoint = {
  date: string;
  value: number;
};

export type HistogramTypeData = {
  data: HistogramDataPoint[];
  histogramType: "totalDocuments" | "riskFactors";
};

export type HistogramResponse = {
  data: HistogramTypeData[];
};

export type SearchResultItem = {
  encodedId: string;
  influence: number;
  similarCount: number;
};

export type ObjectsIDsResponse = {
  items: SearchResultItem[];
  mappings: unknown[];
};

export type DocumentRequestData = {
  ids: string[];
};

export type DocumentResponseItem = {
  ok?: {
    schemaVersion: string;
    id: string;
    version: number;
    issueDate: string;
    url: string;
    source: {
      id: number;
      groupId: number;
      name: string;
      categoryId: number;
      levelId: number;
    };
    dedupClusterId: string;
    title: {
      text: string;
      markup: string;
    };
    content: {
      markup: string;
    };
    entities: {
      companies: unknown[];
      people: unknown[];
      themes: unknown[];
      locations: unknown[];
    };
    attributes: {
      isTechNews: boolean;
      isAnnouncement: boolean;
      isDigest: boolean;
      influence: number;
      wordCount: number;
      coverage: {
        value: number;
        state: string;
      };
    };
    language: string;
  };
  fail?: {
    errorCode: string;
    errorMessage: string;
  };
};

export type DataCells = {
  data: HistogramTypeData | undefined;
};

export interface DocumentResponse extends Array<DocumentResponseItem> {}
