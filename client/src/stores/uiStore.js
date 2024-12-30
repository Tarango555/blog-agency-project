import {create} from "zustand";

const useUIStore = create((set) => ({
  isLoading: false,
  showModal: false,
  activeModal: null,
  email: "",
  password: "",
  error: "",

  setLoading: (status) => set({ isLoading: status }),
  openModal: (modalName) => set({ showModal: true, activeModal: modalName }),
  closeModal: () => set({ showModal: false, activeModal: null, error: "", email: "", password: "" }),

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setError: (error) => set({ error }),
}));

export default useUIStore;
