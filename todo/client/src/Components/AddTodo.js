import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../reducer";

let AddTodo = ({ dispatch }) => (
  <form
    style={styles.form}
    onSubmit={e => {
      e.preventDefault();
      dispatch(
        addTodo(this.input.value, () => {
          this.input.value = "";
        })
      );
    }}
  >
    <input
      ref={node => {
        this.input = node;
      }}
      required
      maxLength={25}
      placeholder="What to get done?"
      type="text"
      autoFocus
    />
    <button type="submit">Go!</button>
  </form>
);

const styles = {
  form: {
    textAlign: "center"
  }
};

AddTodo = connect()(AddTodo);

export default AddTodo;
