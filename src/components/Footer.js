import React, { useState } from 'react'

function Footer() {
  
  const [count, setcount] = useState(0);

  function HandelAdd() {
    setcount(count+1)
    console.log(count);
  }
  function HandelSub() {
    setcount(count-1)
    console.log(count);
  }
  function HandleReset(){
    setcount(0)
  }
  return (
    <div className='app'>
      <div className="box">
        <p className="count">{count}</p>
        <button onClick={HandelAdd} className="add">ADD</button>
        <button onClick={HandelSub} className="sub">SUB</button>
        <button onClick={HandleReset} className="reset">Reset</button>
      </div>
    </div>
  )
}

export default Footer