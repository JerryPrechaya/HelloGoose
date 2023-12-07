export interface IData {
  id: number;
  shopId: number;
  img: string | string[];
  saleAmount: number;
  productName: string;
  rate: number;
  numRate: number;
  price: number;
  categories: string;
  detail: string;
}

export const defaultData: IData = {
  id: -1,
  shopId: -1,
  img: "",
  saleAmount: -1,
  productName: "",
  rate: -1,
  numRate: -1,
  price: -1,
  categories: "",
  detail: "",
};