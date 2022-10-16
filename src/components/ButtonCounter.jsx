import useCount from "../hooks/useCount";

function ButtonCounter(text) {
  const [count, increment, reset] = useCount();

  return (
    <>
      <p className="my-8 text-center text-5xl">{count}</p>
      <button
        type="button"
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={increment}
      >
        {text}
      </button>
      <button
        type="button"
        className="rounded bg-orange-500 py-2 px-4 font-bold text-black hover:bg-orange-700"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}

export default ButtonCounter;
