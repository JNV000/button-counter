import "./App.css";
import useCount from "./hooks/useCount";

function App() {
  const [count, increment] = useCount();

  // <> is shorthand for <Fragment>
  return (
    <>
      <h1 className="mt-8 text-center uppercase text-red-600">
        Button Counter
      </h1>
      <p className="my-8 text-center text-5xl">{count}</p>
      <button
        type="button"
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={increment}
      >
        Click Me!
      </button>
    </>
  );
}

export default App;
