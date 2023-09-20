export function handleClick() {
  alert("Is this working???");
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
