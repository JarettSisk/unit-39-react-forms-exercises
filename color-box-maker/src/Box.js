import React, {useState} from "react";

const Box = ({backgroundColor, height, width, id, remove, testId}) => {
  
  return (
    <div data-testid={testId} className="Box" style={{ backgroundColor, height, width }}>
      <button onClick={() => remove(id)}>X</button>
    </div>
  )   
}

export default Box;