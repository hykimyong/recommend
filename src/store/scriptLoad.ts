import { create } from 'zustand';

// Zustand 스토어 생성
interface Store {
  isTrue: boolean;
  setTrue: () => void;
  setFalse: () => void;
}

export const useStore = create<Store>((set) => ({
  isTrue: false,
  setTrue: () => set({ isTrue: true }),
  setFalse: () => set({ isTrue: false }),
}));