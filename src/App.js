import React ,{useState , useEffect} from 'react';
import './App.css';

function App() {
  const [ count , setCount] =useState(0);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  const [tea, setTtea] = useState({ text: 'Learn Hooks' });
  useEffect(() => {document.title=`当前数目为${count}`} )
  return (
    <div className="App">
      当前数目为{count}
      <div>
        <button onClick = { () => setCount(count+1) } >+</button>
        <span> {count} </span>
        <button onClick = { () => setCount(count-1) } >-</button>
      </div>
      {fruit} <br />
      {todos[0].text} <br />
      {tea.text}
    </div>
  );
}

export default App;
