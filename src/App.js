import AddButton from "./components/atoms/AddButton";
import DeleteButton from "./components/atoms/DeleteButton";
import InputField from "./components/atoms/InputField";
import './styles/index.css';
function App() {
  return (
    <div className="App">
      <InputField label="Name" type="text" name="name" value="" onChange={() => { }} />
      <AddButton onClick={() => { }} />
      <DeleteButton onClick={() => { }} />
    </div>
  );
}

export default App;
