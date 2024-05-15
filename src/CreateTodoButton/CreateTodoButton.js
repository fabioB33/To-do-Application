import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => console.log("le diste click")}
    >
      X
    </button>
  );
};

export { CreateTodoButton };
