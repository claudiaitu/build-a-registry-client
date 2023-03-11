import React, { useContext } from "react";
import { useState } from "react";
import { LoadingContext } from "../context/loading.context";
import { post } from "../services/authService";

const ToDoList = () => {
  const { user, setUser } = useContext(LoadingContext);
  const [text, setText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await post(`/toDo/add-task/${user._id}`, { title: text });
    setUser(response.data);
    setText("");
  };
  return (
    <>
      <div>New Task</div>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <div>
        {user.tasks === 'null' ? <p>No Tasks</p> : (
           (
          user.tasks.map((task) => {
            return <p>{task.title}</p>;
          })
        )
        )}
      </div>
    </>
  );
};

export default ToDoList;
