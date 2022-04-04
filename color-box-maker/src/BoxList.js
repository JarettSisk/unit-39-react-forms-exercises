import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
  const INITIAL_STATE = [
    {
      backgroundColor: "blue",
      height: "200px",
      width: "200px",
      id: uuid(),
      testId: 1
    },
    {
      backgroundColor: "green",
      height: "200px",
      width: "200px",
      id: uuid(),
      testId: 2
    }
  ];

  // id for testing
  const [testId, setTestId] = useState(3);

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  // Remove box
  const remove = (boxId) => {
    // set boxes to new array only containing boxes that dont match the id of the one we want to remove
    setBoxes(boxes.filter(b => b.id !== boxId));
};

  // add box to our state
  const addBox = (box) => {
    const newBox = {...box, id: uuid(), testId: testId};
    setBoxes(boxes => [...boxes, newBox])
    // increment testId
    setTestId(testId + 1);
  }

  const renderBoxes = () => {
    return (
      boxes.map(box => {
        const {backgroundColor, height, width, id, testId} = box;
        return (
          <Box 
            testId={testId}
            key={id}
            id={id}
            backgroundColor={backgroundColor}
            height={height}
            width={width}
            remove={remove}
          />
        )
      })
    )
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      <div className="BoxList-boxes">
        {renderBoxes()}
      </div>
    </div>
    
  )
}

export default BoxList;