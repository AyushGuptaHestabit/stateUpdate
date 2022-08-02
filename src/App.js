import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import ChildForm from './components/ChildForm';
import ChildText from './components/ChildText';

function App() {
  const [text, setText] = useState('Hey I am Parent Component..!');
  const [text1, setText1] = useState('Hey I am Child Component..!');

  return (
    <div className="App">
      <header className="App-header">
        <div className='container my-5'>
          <div className='row my-5'>
            <h2 className='my-3'>State Update From Child To Parent</h2>
            <div className='col-4 mx-auto border border-white'>
              <h3 className='text-muted'>Parent Component</h3>
              <p>{text}</p>
            </div>
            <div className='col-4 mx-auto border border-white'>
              <h3 className='text-muted'>Child Component</h3>
              <ChildForm text={text} setText={setText} />
            </div>
          </div>
          <div className='row my-5'>
            <h2 className='my-3'>State Update From Parent To Child</h2>
            <div className='col-4 mx-auto border border-white'>
              <h3 className='text-muted'>Parent Component</h3>
              <textarea rows="8" className='form-control mb-5' value={text1} onChange={(e) => setText1(e.target.value)} />
            </div>
            <div className='col-4 mx-auto border border-white'>
              <h3 className='text-muted'>Child Component</h3>
              <ChildText text={text1} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
