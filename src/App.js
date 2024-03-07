import './App.css';
import { useInput2 } from './customhook/useInput2';
// import { useInput } from './customhook/useInput';

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput2(
    '',
    displayMessage
  );
  const [inputValue2, handleChange2, handleSubmit2] = useInput2(
    '',
    displayMessage
  );
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
      <input value={inputValue2} onChange={handleChange2} />
      <button onClick={handleSubmit2}>확인</button>
    </div>
  );
}

export default App;
