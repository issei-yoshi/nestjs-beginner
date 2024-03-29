import { ItemStatus } from './item-status.enum';

export interface Item {
  id: string;
  name: string;
  price: number;
  description;
  status: ItemStatus;
}