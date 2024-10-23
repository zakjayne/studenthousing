import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  isVerified: boolean;
  name: string;
}

interface StoreState {
  user: User | null;
  isVerified: boolean;
}

interface StoreActions {
  setUser: (user: User | null) => void;
  setVerified: (status: boolean) => void;
}

const useStore = create<StoreState & StoreActions>((set) => ({
  user: null,
  isVerified: false,
  setUser: (user) => set({ user }),
  setVerified: (status) => set({ isVerified: status }),
}));

export default useStore;