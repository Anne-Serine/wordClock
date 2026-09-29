import type { ClockLetter, ClockRole, ClockWord } from "../types/clock";

function row(
  parts: Array<[string, ClockWord?, ClockRole?]>,
): ClockLetter[] {
  return parts.flatMap(([text, word, role]) =>
    [...text].map((letter) => {
      if (!word) {
        return { letter };
      }
      return role ? { letter, word, role } : { letter, word };
    }),
  );
}

export const clockLayout: ClockLetter[][] = [
  row([
    ["KLOKKA", "KLOKKA"],
    ["S"],
    ["ER", "ER"],
    ["N"],
  ]),
  row([
    ["HYBULFÆZOG"],
  ]),
  row([
    ["FEM", "FEM", "minutes"],
    ["TI", "TI", "minutes"],
    ["KVART", "KVART"],
  ]),
  
  row([
    ["HYJKLIRPØZ"],
  ]),
  row([
    ["SX"],
    ["PÅ", "PÅ"],
    ["QY"],
    ["OVER", "OVER"],
  ]),
  row([
    ["PBK"],
    ["HALV", "HALV"],
    ["ISY"],
  ]),
  row([
    ["TOLV", "TOLV"],
    ["SY"],
    ["ETT", "ETT"],
    ["C"],
  ]),
  row([
    ["XY"],
    ["TO", "TO"],
    ["ND"],
    ["TRE", "TRE"],
    ["Å"],
  ]),
  row([
    ["FIRE", "FIRE"],
    ["AS"],
    ["FEM", "FEM", "hours"],
    ["S"],
  ]),
  row([
    ["X"],
    ["SEKS", "SEKS"],
    ["ÅN"],
    ["SJU", "SJU"],
  ]),
  row([
    ["ÅTTE", "ÅTTE"],
    ["JI"],
    ["NI", "NI"],
    ["HY"],
  ]),
  row([
    ["TI", "TI", "hours"],
    ["GX"],
    ["ELLEVE", "ELLEVE"],
  ]),
];
