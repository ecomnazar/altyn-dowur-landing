import { create } from "zustand";

interface IState {
  trackEnabled: boolean;
  trackModal: boolean;
}

interface IAction {
  changeTrackModal: (boolean: boolean) => void;
  changeTrackEnabled: (boolean: boolean) => void;
}

export const useStore = create<IState & IAction>((set) => ({
  trackEnabled: false,
  trackModal: false,
  changeTrackModal: (boolean) => {
    set({ trackModal: boolean });
  },
  changeTrackEnabled: (boolean) => {
    set({ trackEnabled: boolean });
  },
}));
