import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: "",
    height: "",
    width: ""
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData); //add the box in the parent state
    setFormData(INITIAL_STATE); // reset the form
  }

  // handle form change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }


  // render form
  return (
    <form onSubmit={handleSubmit} className="NewBoxForm">
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        placeholder="pink"
      />

      <label htmlFor="height">Height</label>
      <input
        type="text"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="100px"
      />

      <label htmlFor="width">Width</label>
      <input
        type="text"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        placeholder="200px"
      />

      <button className="NewBoxForm-button">Add new box!</button>
    </form>
  )   
}

export default NewBoxForm;