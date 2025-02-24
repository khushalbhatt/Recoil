import React, { useEffect, useMemo } from 'react';
import './App.css';
import countAtom from './store/atoms/count';
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
      <Countrender />
      <Button />
    </>
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
  const count = useRecoilValue(countAtom);
  const IsEven = useMemo(() => {
    return count % 2 === 0;
  },[count]);
  return (
    <div>
      {IsEven ? "The count is even": "The count is odd!"}
    </div>
  )
}

export default App;