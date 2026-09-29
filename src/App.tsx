import { useEffect, useState } from "react";
import WordClock from "./assets/components/WordClock";
import { getTimePhrase } from "./assets/utils/getTimePhrase";
import "./App.css";

function App() {
  const [time, setTime] = useState<Date>(() => new Date());

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  const { words, extraMinutes } = getTimePhrase(time);

  return (
    <main className="clock-page">
      <WordClock words={words} extraMinutes={extraMinutes} />
    </main>
  );
}

export default App;
