import LetterGrid from "./LetterGrid";
import { clockLayout } from "../data/clockLayout";
import type { ActiveWord } from "../types/clock";
import MinuteDots from "./MinuteDots";

interface WordClockProps {
  words: ActiveWord[];
  extraMinutes: number;
}

export default function WordClock({ 
  words,
  extraMinutes
}: WordClockProps) {
  return (
    <section className="word-clock">
      <LetterGrid
        layout={clockLayout}
        activeWords={words}
      />

      <MinuteDots activeCount={extraMinutes} />
    </section>
  );
}
