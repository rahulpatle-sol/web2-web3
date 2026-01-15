import { create } from 'zustand'

export const useUniverse = create((set) => ({
  mode: 'web2', // default mode
  setMode: (newMode) => set({ mode: newMode }),
  toggleMode: () => set((state) => ({ mode: state.mode === 'web2' ? 'web3' : 'web2' })),
}))