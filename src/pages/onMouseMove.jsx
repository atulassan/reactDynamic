import {useState} from 'react';
export default function onMouseMove() {
    const [position, setPosition]= useState({x: 0, y: 0});
    const mouseHandler = (e) => {
        setPosition({
            x: e.clientX, 
            y: e.clientY
        })
    }
    
  return (
      <>
          <div onMouseMove={mouseHandler} className="app-container" style={{height: '200vh; background: "#f0f0f0",'}}>
              <p>x: {position.x}</p>
              <p>Y: {position.y}</p>
          </div>
      </>
  )
}
