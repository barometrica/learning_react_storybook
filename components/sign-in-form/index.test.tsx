import initStoryshots from "@storybook/addon-storyshots";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as stories from "./index.stories";
import {
  EmptyError as emptyErrorStory,
  FilledSuccess as filledSuccessStory,
} from "./index.stories";

initStoryshots();

describe("SignInForm", () => {
  const { EmptyError, FilledSuccess } = composeStories(stories);
  test("Validate form blank errors", async () => {
    render(<EmptyError />);
    await emptyErrorStory.play();
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent("メールアドレスを入力してください");
    expect(alerts[1]).toHaveTextContent("パスワードを入力してください");
  });

  test("Filled valid input value", async () => {
    render(<FilledSuccess />);
    await filledSuccessStory.play();
    const mailAddressInput: HTMLInputElement =
      await screen.findByPlaceholderText("メールアドレス");
    const passwordInput: HTMLInputElement = await screen.findByPlaceholderText(
      "パスワード"
    );
    expect(mailAddressInput.value).toBe("uesr@example.com");
    expect(passwordInput.value).toBe("password");
    const alerts = screen.queryAllByRole("alert");
    expect(alerts).toHaveLength(0);
  });
});
