import "./ToDoList.css";
import React, { useState } from "react";

export const TodoList = () => {
  const [taskList, setTaskList] = useState(["tsass", "dsadsad", "dsafew"]);
  const [addTask, setAddTask] = useState("");

  function handleSubmit() {
    if (addTask.trim()) {
      setTaskList([...taskList, addTask]);
      setAddTask((prevSetAddTask) => (prevSetAddTask = ""));
      console.log(taskList);
    }
  }
  return (
    <>
      <div className="contrainer">
        <div className="tasks">
          <ul>
            {taskList.map((task, index) => (
              <div key={index} className="task">
                {console.log(task)}
                <li>
                  <input type="checkbox" /> {task}
                </li>
                <span>
                  <span className="move">
                    <button>☝️</button>
                  </span>
                  <span className="move">
                    <button>👇</button>
                  </span>
                  <span className="del">
                    <button>🗑️</button>
                  </span>
                </span>
              </div>
            ))}
          </ul>
        </div>
        <input
          type="text"
          id="taskbox"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
          className="boxinput"
        />
        <button className="sub" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
