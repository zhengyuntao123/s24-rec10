interface GameState {
  cells: Cell[],
  currentPlayerId: number
  winner: number | null
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }