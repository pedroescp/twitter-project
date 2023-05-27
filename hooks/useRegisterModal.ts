import { create } from 'zustand'

interface useRegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useRegisterModal = create<useRegisterModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal