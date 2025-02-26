import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { countAtom, evenSelector,todoselector,todoAtom } from './store/atoms/count';
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <>
      <Todo></Todo>
      <Countrender />
      <Button />
    </>
  );
}


function Todo() {
  const [todo,updatetodo] = useRecoilState(todoAtom);
  const [newTodo,setNewTodo] = useState('');
  function addtodo(){
      const newTodoItem = {
        id: todo.length + 1,
        title: newTodo,
      }
      updatetodo([...todo, newTodoItem]);
      setNewTodo('');
   }
  return (
    <div>
      <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} type="text" />
      <button  onClick={addtodo}>Add</button>
      {todo.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

function Countrender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <IsEven />
    </div>
  );
}

function IsEven() {
  // const count = useRecoilValue(countAtom);
  // const IsEven = useMemo(() => {
  //   return count % 2 === 0;
  // },[count]);
  const IsEven = useRecoilValue(evenSelector);
  return (
    <div>
      {IsEven ? "The count is even": "The count is odd!"}
    </div>
  )
}

export default App;