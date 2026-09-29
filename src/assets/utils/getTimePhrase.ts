import type { ActiveWord, ClockWord, TimePhrase } from "../types/clock";

const hours: ClockWord[] = [
  "TOLV",
  "ETT",
  "TO",
  "TRE",
  "FIRE",
  "FEM",
  "SEKS",
  "SJU",
  "ÅTTE",
  "NI",
  "TI",
  "ELLEVE",
];

function word(value: ClockWord): ActiveWord {
  return { word: value };
}

function hourWord(value: ClockWord): ActiveWord {
  if (value === "FEM" || value === "TI") {
    return { word: value, role: "hours" };
  }
  return { word: value };
}

function minuteWord(value: "FEM" | "TI"): ActiveWord {
  return { word: value, role: "minutes" };
}

export function getTimePhrase(date: Date): TimePhrase {
  const minutes = date.getMinutes();
  const interval = Math.floor(minutes / 5) * 5;

  const currentHour = date.getHours() % 12;
  const nextHour = (currentHour + 1) % 12;

  const current = hourWord(hours[currentHour]);
  const next = hourWord(hours[nextHour]);

  const phrases: Record<number, ActiveWord[]> = {
    0: [word("KLOKKA"), word("ER"), current],
    5: [word("KLOKKA"), word("ER"), minuteWord("FEM"), word("OVER"), current],
    10: [word("KLOKKA"), word("ER"), minuteWord("TI"), word("OVER"), current],
    15: [word("KLOKKA"), word("ER"), word("KVART"), word("OVER"), current],
    20: [word("KLOKKA"), word("ER"), minuteWord("TI"), word("PÅ"), word("HALV"), next],
    25: [word("KLOKKA"), word("ER"), minuteWord("FEM"), word("PÅ"), word("HALV"), next],
    30: [word("KLOKKA"), word("ER"), word("HALV"), next],
    35: [word("KLOKKA"), word("ER"), minuteWord("FEM"), word("OVER"), word("HALV"), next],
    40: [word("KLOKKA"), word("ER"), minuteWord("TI"), word("OVER"), word("HALV"), next],
    45: [word("KLOKKA"), word("ER"), word("KVART"), word("PÅ"), next],
    50: [word("KLOKKA"), word("ER"), minuteWord("TI"), word("PÅ"), next],
    55: [word("KLOKKA"), word("ER"), minuteWord("FEM"), word("PÅ"), next],
  };

  return {
    words: phrases[interval],
    extraMinutes: minutes % 5,
  };
}
