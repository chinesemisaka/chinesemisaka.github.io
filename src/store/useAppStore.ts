import { create } from 'zustand';

interface AppState {
  cursorPosition: { x: number; y: number };
  setCursorPosition: (pos: { x: number; y: number }) => void;
  terminalHistory: string[];
  addTerminalHistory: (entry: string) => void;
  clearTerminalHistory: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  cursorPosition: { x: 0, y: 0 },
  setCursorPosition: (pos) => set({ cursorPosition: pos }),
  terminalHistory: [
    'Initializing terminal sequence...',
    'Loading profile data...',
    'System ready.'
  ],
  addTerminalHistory: (entry) =>
    set((state) => ({ terminalHistory: [...state.terminalHistory, entry] })),
  clearTerminalHistory: () => set({ terminalHistory: [] }),
}));
