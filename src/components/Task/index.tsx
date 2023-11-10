import { useState } from "react";
import style from "./task.module.css";

import { Trash } from "phosphor-react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  onComplete: () => void;
  onRedo: () => void;
}

export function Task({ content, onDeleteTask, onComplete, onRedo }: TaskProps) {
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
        onClick={isChecked ? onRedo : onComplete}
      />

      <p className={isChecked ? style.checked : ""}>{content}</p>

      <button onClick={() => onDeleteTask(content)}>
        <Trash size={14} />
      </button>
    </div>
  );
}
