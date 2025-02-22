import InputField from "./components/atoms/InputField";

function App() {
  return (
    <div className="App">
      <InputField label="Name" type="text" name="name" value="" onChange={() => { }} />
    </div>
  );
}

export default App;
