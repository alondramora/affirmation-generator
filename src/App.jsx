import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { handleClick } from "./components/Button";
import { affirmations } from "./database/db";

export default function App() {
  const [affirmation, setAffirmation] = useState("");

  return (
    <>
      <main>
        <header>
          <h1>Affirmation Generator</h1>
        </header>
        <section className="affirmation-wrapper">
          <h2>Click the button for a new affirmation</h2>
          <Button onClick={handleClick} />
          <p className="affirmation">Affirmation will go here</p>
          <p>{affirmation}</p>
        </section>
      </main>
    </>
  );
}
