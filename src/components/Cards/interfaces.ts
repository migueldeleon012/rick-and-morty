export interface ICard {
  key?: string;
  id?: string;
  name?: string;
  species?: string;
  gender?: string;
  image?: string | undefined;
  alt?: string;
  favorite?: any[];
  fromFavorite?: boolean;
  setFavorite?: (value: any[]) => void;
  origin?: string;
  location?: string;
  episode?: string[];
}
