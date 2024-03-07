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

  console.log('랜더링!');
  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
