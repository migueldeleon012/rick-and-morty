import { ICurrentDataInfo } from '../../pages/Homepage/interfaces';

export interface IPagination {
  currentPage: number;
  setCurrentPage: (value: any) => void;
  currentDataInfo: ICurrentDataInfo;
  maxPageLimit: number;
  setMaxPageLimit: (value: number) => void;
  minPageLimit: number;
  setMinPageLimit: (value: number) => void;
}
