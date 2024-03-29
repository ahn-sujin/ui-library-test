import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: { size: "sm", children: "Click Me" },
};

export const Medium: Story = {
    args: { size: "md", children: "Click Me" },
};

export const LargeOnClick: Story = {
    args: {
        size: "lg",
        children: "Click Me",
        onClick: () => alert("Clicked!"),
    },
};

export const Disabled: Story = {
    args: { size: "lg", children: "Click Me", disabled: true },
};