import type { ActiveWord, ClockLetter } from "../types/clock";

interface LetterGridProps {
  layout: ClockLetter[][];
  activeWords: ActiveWord[];
}

export default function LetterGrid({
  layout,
  activeWords,
}: LetterGridProps) {
  const columns = layout[0]?.length ?? 0;

  return (
    <div
      className="letter-grid"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {layout.flat().map((item, index) => {
        const isActive =
          item.word !== undefined &&
          activeWords.some(
            (active) =>
              active.word === item.word &&
              (item.role === undefined || item.role === active.role),
          );

        return (
          <span
            key={index}
            className={`letters${isActive ? " active" : ""}`}
          >
            {item.letter}
          </span>
        );
      })}
    </div>
  );
}
