import "./ToDoList.css";
import React, { useState } from "react";

export const TodoList = () => {
  const [taskList, setTaskList] = useState(["alaki", "yook", "yakarim"]);

  return (
    <>
      <div className="contrainer">
        <div className="tasks">
          <ul>
            {taskList.map((task, index) => (
              <div key={index} className="task">
                <li className="">
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
        <input type="text" className="txt-box" />
        <button className="sub">Submit</button>
      </div>
    </>
  );
};
