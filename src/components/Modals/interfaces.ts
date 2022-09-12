import { ICard } from '../Cards/interfaces';

export interface IModal extends ICard {
  isModalOpen: boolean;
  openModal: (open: boolean) => any;
}
