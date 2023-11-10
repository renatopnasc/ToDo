import "./global.css";
import style from "./App.module.css";

import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { ClipboardText, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);

  const numberOfTasksCreated = tasksList.length;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (task === "") return;

    setTasksList([task, ...tasksList]);
    setTask("");
  }

  function deleteTask(taskToDelete: string) {
    const taskListWithoutDeletedOne = tasksList.filter(
      (task) => task !== taskToDelete
    );

    setTasksList(taskListWithoutDeletedOne);
  }

  function completeTask() {
    setCompletedTasks((state) => state + 1);
  }

  function redoTask() {
    setCompletedTasks((state) => state - 1);
  }

  return (
    <div>
      <Header />

      <main className={style.content}>
        <form onSubmit={handleCreateNewTask} className={style.newTask}>
          <input
            onChange={handleNewTaskChange}
            placeholder="Adicionar uma nova tarefa"
            type="text"
            value={task}
          />

          <button>
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <div className={style.taskContainer}>
          <header className={style.info}>
            <p>
              Tarefas criadas <span>{numberOfTasksCreated}</span>
            </p>

            <p>
              Concluídas{" "}
              <span>
                {completedTasks} de {numberOfTasksCreated}
              </span>
            </p>
          </header>

          {tasksList.length == 0 && (
            <div className={style.emptyContainer}>
              <ClipboardText size={56} />

              <p>
                <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas
                e organize seus itens a fazer
              </p>
            </div>
          )}

          {tasksList.length > 0 &&
            tasksList.map((task) => (
              <Task
                content={task}
                onDeleteTask={deleteTask}
                onComplete={completeTask}
                onRedo={redoTask}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
