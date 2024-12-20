import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';

const meta = {
  title: 'Components/Input/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (value: string) => {
      console.log('Password value:', value);
    },
  },
};
