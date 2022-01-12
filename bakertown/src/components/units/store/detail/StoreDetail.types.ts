export interface IStoreDetailPresenterProps {
  myStore: {
    address: string;
    category: string;
    itemName: string;
    contents: string;
    patissier: string;
    price: number;
    shippingTime: string;
    review: [];
    heart: number;
  };
  purchase: () => void;
  heart: () => void;
}
