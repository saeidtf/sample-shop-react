export type OrderDataType = {
  address: string;
  createdAt: string;
  date: string | null;
  id: number;
  quantity: number;
  status: string;
  statusTitle: string;
  total: number;
  userId: number;
};

export type OrderDetailsDataType = {
  id: number;
  productId: number;
  quantity: number;
  price: number;
  total: number;
  product: {
    id: number;
    name: string;
    image: string;
  };
};
