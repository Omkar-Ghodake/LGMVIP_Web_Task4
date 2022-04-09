import React, { useState } from 'react'
import './App.css';

function App() {

  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult('')
  }

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  const onChange = () => {

  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mx-auto border border-2 border-bottom-0 p-3 rounded-3">
            <form className='text-center'>
              <input type="text" value={result} onChange={onChange} className='text-end w-100' />
            </form>
          </div>
        </div>
        <div className="keypad">
          <div className="row mb-2">
            <div className="col-md-3 mx-auto border border-2 border-top-0 p-3 rounded-3">
              <div className="row mb-2 g-2">
                <div className="col-6">
                  <button onClick={clear} className='w-100 py-2 key btn-green' id='clear'>AC</button>
                </div>
                <div className="col-3">
                  <button onClick={backSpace} className='w-100 py-2 key btn-green' id='backSpace'><i className="fa-solid fa-delete-left"></i></button>
                </div>
                <div className="col-3">
                  <button name='/' onClick={handleClick} className='w-100 py-2 key btn-blue'>&divide;</button>
                </div>

                <div className="col-3">
                  <button name='7' onClick={handleClick} className='w-100 py-2 key btn-white'>7</button>
                </div>
                <div className="col-3">
                  <button name='8' onClick={handleClick} className='w-100 py-2 key btn-white'>8</button>
                </div>
                <div className="col-3">
                  <button name='9' onClick={handleClick} className='w-100 py-2 key btn-white'>9</button>
                </div>
                <div className="col-3">
                  <button name='*' onClick={handleClick} className='w-100 py-2 key btn-blue'>&times;</button>
                </div>

                <div className="col-3">
                  <button name='4' onClick={handleClick} className='w-100 py-2 key btn-white'>4</button>
                </div>
                <div className="col-3">
                  <button name='5' onClick={handleClick} className='w-100 py-2 key btn-white'>5</button>
                </div>
                <div className="col-3">
                  <button name='6' onClick={handleClick} className='w-100 py-2 key btn-white'>6</button>
                </div>
                <div className="col-3">
                  <button name='-' onClick={handleClick} className='w-100 py-2 key btn-blue'>&ndash;</button>
                </div>

                <div className="col-3">
                  <button name='1' onClick={handleClick} className='w-100 py-2 key btn-white'>1</button>
                </div>
                <div className="col-3">
                  <button name='2' onClick={handleClick} className='w-100 py-2 key btn-white'>2</button>
                </div>
                <div className="col-3">
                  <button name='3' onClick={handleClick} className='w-100 py-2 key btn-white'>3</button>
                </div>
                <div className="col-3">
                  <button name='+' onClick={handleClick} className='w-100 py-2 key btn-blue'>+</button>
                </div>

                <div className="col-3">
                  <button name='0' onClick={handleClick} className='w-100 py-2 key btn-white'>0</button>
                </div>
                <div className="col-3">
                  <button name='.' onClick={handleClick} className='w-100 py-2 key btn-white'>.</button>
                </div>
                <div className="col-6">
                  <button onClick={calculate} className='w-100 py-2 key btn-lavender'>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
