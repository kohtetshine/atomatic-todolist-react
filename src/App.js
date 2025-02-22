import AddButton from "./components/atoms/AddButton";
import InputField from "./components/atoms/InputField";

function App() {
  return (
    <div className="App">
      <InputField label="Name" type="text" name="name" value="" onChange={() => { }} />
      <AddButton onClick={() => { }} />
    </div>
  );
}

export default App;
