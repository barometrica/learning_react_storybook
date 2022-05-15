import initStoryshots from "@storybook/addon-storyshots";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as stories from "./index.stories";

initStoryshots();

describe("TaskList", () => {
  const { WithPinnedTasks } = composeStories(stories);
  test("renders pinned tasks at the start of the list", () => {
    const pinnedTitle = WithPinnedTasks.args!.tasks![5].title; // "Task 6 (pinned)"
    render(<WithPinnedTasks />);
    const values = screen.getAllByDisplayValue(/^Task/);
    expect(values).toHaveLength(6);
    expect(screen.getByDisplayValue(pinnedTitle)).toBeInTheDocument();
    expect((values[0] as HTMLInputElement).value).toBe(pinnedTitle);
  });
});
