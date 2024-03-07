import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './customhook/useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

function App() {
  const { data: userData } = useFetch('users', baseUrl);
  const { data: postData } = useFetch('posts', baseUrl);

  return (
    <div>
      <h1>useFetch</h1>

      {/* <button onClick={() => fetchUrl('users')}>Users</button>
      <button onClick={() => fetchUrl('posts')}>Posts</button>
      <button onClick={() => fetchUrl('todos')}>Todos</button> */}
      <h1>user</h1>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;
