export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}
