import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './customhook/useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

function App() {
  const [data, fetchUrl] = useFetch('users', baseUrl);

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={() => fetchUrl('users')}>Users</button>
      <button onClick={() => fetchUrl('posts')}>Posts</button>
      <button onClick={() => fetchUrl('todos')}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
