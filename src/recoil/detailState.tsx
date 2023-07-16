import { atom } from 'recoil';
import { detailDataType } from '../pages/StoreDetail/StoreDetail';

export const detailState = atom<detailDataType | null>({
  key: 'detailState',
  default: null,
});

export const starIndexState = atom({
  key: 'starIndexState',
  default: 0,
});

export const averageRatingState = atom({
  key: 'averageRatingState',
  default: '0.0',
});

export const ratingModalState = atom({
  key: 'ratingModalState',
  default: false,
});
