import type { Meta, StoryObj } from '@storybook/react';
import NameInput from './NameInput';

const meta = {
  title: 'Components/Input/NameInput',
  component: NameInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NameInput>;

export default meta;
type Story = StoryObj<typeof NameInput>;

export const Default: Story = {
  args: {
    onChange: (value) => console.log('Name changed:', value),
    maxLength: 30,
  },
};

export const CustomMaxLength: Story = {
  args: {
    onChange: (value) => console.log('Name changed:', value),
    maxLength: 10,
  },
};
