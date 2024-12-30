import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalVisible: false, // Modal visibility
  modalType: null, // 'edit' or 'create'
  modalData: {}, // Modal data for blog editing/creating

  // Open modal with type and data
  openModal: (type, data = {}) =>
    set({ isModalVisible: true, modalType: type, modalData: data }),

  // Close modal
  closeModal: () => set({ isModalVisible: false, modalType: null, modalData: {} }),

  // Update modal data (used for on-the-fly editing)
  updateModalData: (data) => set((state) => ({ modalData: { ...state.modalData, ...data } })),
}));

export default useModalStore;