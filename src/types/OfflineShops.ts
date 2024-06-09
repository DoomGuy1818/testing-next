export interface OfflineShop {
  id: string;
  name: string;
  location: string;
}
export interface CreateOfflineShop extends Omit<OfflineShop, "id"> {}
