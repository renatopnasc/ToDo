import { useState } from "react";
import style from "./task.module.css";

import { Trash } from "phosphor-react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string, checked: boolean) => void;
  onCompleteTask: () => void;
  onRedoTask: () => void;
}

export function Task({
  content,
  onDeleteTask,
  onCompleteTask,
  onRedoTask,
}: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked((state) => !state);
  }
  return (
    <div className={style.task}>
      <input
        name="checkbox"
        id="check"
        type="checkbox"
        onChange={handleCheckboxChange}
        className={isChecked ? style.checkedInput : ""}
        onClick={isChecked ? onRedoTask : onCompleteTask}
      />

      <p className={isChecked ? style.checked : ""}>{content}</p>

      <button onClick={() => onDeleteTask(content, isChecked ? true : false)}>
        <Trash size={14} />
      </button>
    </div>
  );
}
