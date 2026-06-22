import { create } from 'zustand'

interface UIStore {
  isCommandOpen: boolean
  setCommandOpen: (open: boolean) => void
  toggleCommand: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isCommandOpen: false,
  setCommandOpen: (open) => set({ isCommandOpen: open }),
  toggleCommand: () => set((state) => ({ isCommandOpen: !state.isCommandOpen })),
}))
