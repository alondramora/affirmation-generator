import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { handleClick } from "./components/Button";
import { affirmations } from "./database/db";

export default function App() {
  const [affirmation, setAffirmation] = useState("YOU GOT DIS");

  return (
    <>
      <main>
        <header>
          <h1>Affirmation Generator</h1>
        </header>
        <section className="affirmation-wrapper">
          <h2>Click the button for a new affirmation</h2>
          <Button onClick={handleClick} />
          {/* the value of { affirmation } comes from the initial useState value, then it gets updated by setAffirmation function */}
          <p className="affirmation">{affirmation}</p>
        </section>
      </main>
    </>
  );
}
