import "./App.css";
import Button from "./components/Button";

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
      </section>
    </>
  );
}

export default App;
