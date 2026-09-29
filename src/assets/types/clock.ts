export type ClockWord =
  | "KLOKKA"
  | "ER"
  | "FEM"
  | "TI"
  | "KVART"
  | "OVER"
  | "PÅ"
  | "HALV"
  | "ETT"
  | "TO"
  | "TRE"
  | "FIRE"
  | "SEKS"
  | "SJU"
  | "ÅTTE"
  | "NI"
  | "ELLEVE"
  | "TOLV";

export type ClockRole = "minutes" | "hours";

export interface ActiveWord {
  word: ClockWord;
  role?: ClockRole;
}

export interface TimePhrase {
  words: ActiveWord[];
  extraMinutes: number;
}

export interface ClockLetter {
  letter: string;
  word?: ClockWord;
  role?: ClockRole;
}
