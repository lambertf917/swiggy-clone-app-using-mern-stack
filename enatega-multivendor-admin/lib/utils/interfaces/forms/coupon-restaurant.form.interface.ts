export interface ICouponRestaurantForm {
  title: string;
  discount: number | null;
  enabled: boolean;
  lifeTimeActive: boolean;
  endDate: string;
}
