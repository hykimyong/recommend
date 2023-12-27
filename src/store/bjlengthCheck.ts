import { create } from 'zustand';

// Zustand 스토어 생성
interface Store {
  isOver: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export const useLengthStore = create<Store>((set) => ({
  isOver: false,
  setTrue: () => set({ isOver: true }),
  setFalse: () => set({ isOver: false }),
}));