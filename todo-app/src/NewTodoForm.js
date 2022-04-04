import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({addTodo}) => {
  const INITIAL_STATE = {
    description: ""
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData); //add the todo in the parent state
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
    <form onSubmit={handleSubmit} className="NewTodoForm">
      <label className="NewTodoFOrm-label-description" htmlFor="description">What do you need to do?</label>
      <input
        className="NewTodoForm-input-description"
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Pick up groceries"
      />
      <button className="NewTodoForm-button">ADD</button>
    </form>
  )

}

export default NewTodoForm;