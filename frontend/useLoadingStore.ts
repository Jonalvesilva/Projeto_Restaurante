import { create } from "zustand";

type GlobalState = {
  loading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useLoadingStore = create<GlobalState>((set) => ({
  loading: false,
  setIsLoading: (loading: boolean) =>
    set((state: any) => {
      return { loading };
    }),
}));
