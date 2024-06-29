export type TarifType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  installment?: number | null;
  options: string[];
  type: string;
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

export interface HistogramDataPoint {
  date: string;
  value: number;
}

export interface Histogram {
  data: HistogramDataPoint[];
  histogramType: "totalDocuments" | "riskFactors";
}

export interface HistogramResponse {
  data: Histogram[];
}

interface HistogramState {
  data: Histogram[];
  loading: boolean;
  error: string | null;
}

export const initialState: HistogramState = {
  data: [],
  loading: false,
  error: null,
};

export interface SearchResultItem {
  encodedId: string;
  influence: number;
  similarCount: number;
}

export interface ObjectsIDsResponse {
  items: SearchResultItem[];
  mappings: unknown[];
}

export interface DocumentRequestData {
  ids: string[];
}

export interface DocumentResponseItem {
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
}

export interface DocumentResponse extends Array<DocumentResponseItem> {}
