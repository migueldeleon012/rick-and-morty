import { ICard } from '../Cards/interfaces';

export interface IModal extends ICard {
  isModalOpen: Boolean;
  openModal: (open: Boolean) => any;
}
