import type { ComponentStoryObj } from "@storybook/react";
import { Task } from "components/task-item";
import * as TaskItemStories from "../task-item/index.stories";
import { TaskList } from "../task-list";

type Story = ComponentStoryObj<typeof TaskList>;

export default { component: TaskList };

const defaultTask = TaskItemStories.Default.args?.task as Task;

const defaultTasks = Array.from({ length: 6 }, (_, i) => ({
  ...defaultTask,
  id: `${i + 1}`,
  title: `Task ${i + 1}`,
}));

export const Default: Story = {
  args: { tasks: defaultTasks },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...defaultTasks.slice(0, 5),
      {
        id: "6",
        title: "Task 6 (pinned)",
        state: "TASK_PINNED",
        updatedAt: new Date(2021, 0, 10, 10, 0),
      },
    ],
  },
};

export const Loading: Story = {
  args: { tasks: [], loading: true },
};

export const Empty: Story = {
  args: { ...Loading.args, loading: false },
};
