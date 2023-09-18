import "./App.css";
import Button from "./components/Button";
import { affirmations } from "./database/db";

function App() {
  return (
    <>
      <header>
        <h1>Affirmation Generator</h1>
      </header>
      <section className="affirmation-wrapper">
        <h2>Click the button for a new affirmation</h2>
        <Button />
        <p className="affirmation">Affirmation will go here</p>
        <p>{affirmations}</p>
      </section>
    </>
  );
}

export default App;
