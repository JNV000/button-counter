import "./App.css";
import ButtonCounter from "./components/ButtonCounter";

const buttons = [
  {
    txt: "Button 1",
  },
  {
    txt: "Button 2",
  },
  {
    txt: "Button 3",
  },
];

function App() {
  // const counters = buttons.map((crntBtn) => <ButtonCounter />).join("\n"); // join makes it stop working
  // <> is shorthand for <Fragment>
  return (
    <>
      <h1 className="mt-8 text-center uppercase text-red-600">
        Button Counter
      </h1>

      {buttons.map((crntBtn) => ButtonCounter(crntBtn.txt))}
    </>
  );
}

export default App();
