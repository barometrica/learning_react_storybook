/* eslint-disable storybook/context-in-play-function */
import type { ComponentStoryObj } from "@storybook/react";
import { userEvent, screen } from "@storybook/testing-library";
import { SignInForm } from "./index";

type Story = ComponentStoryObj<typeof SignInForm>;

export default { component: SignInForm };

export const Default: Story = {};

export const EmptyError = {
  ...Default,
  play: async () => userEvent.click(screen.getByText(/ログイン/i)),
};

export const Filled = {
  ...Default,
  play: async () => {
    await userEvent.type(
      screen.getByPlaceholderText("メールアドレス"),
      "uesr@example.com"
    );
    await userEvent.type(screen.getByPlaceholderText("パスワード"), "password");
  },
};

export const FilledSuccess = {
  ...Filled,
  play: async () => {
    await Filled.play();
    await EmptyError.play();
  },
};
