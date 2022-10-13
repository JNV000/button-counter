import "./App.css";
import ButtonCounter from "./components/ButtonCounter";

function App() {
  // <> is shorthand for <Fragment>
  return (
    <>
      <h1 className="mt-8 text-center uppercase text-red-600">
        Button Counter
      </h1>

      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
    </>
  );
}

export default App;
