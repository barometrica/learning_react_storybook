import React from "react";

export type Task = {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
};

export type Props = {
  task: Task;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export const TaskItem = ({ task, onArchiveTask, onPinTask }: Props) => {
  return (
    <div className={`list-item ${task.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          <a onClick={() => onPinTask(task.id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
