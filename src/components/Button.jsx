//import affirmations array
import { affirmations } from "../database/db";
// Find a way to get the handleClick value out of here and into the p tag in
// App.jsx
export function handleClick() {
  console.log(affirmations[0]);
  // when we click the button, generate a random affirmation from the affirmations db located in database > db.js
}

export default function Button() {
  return (
    <>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}
