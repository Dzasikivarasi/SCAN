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
