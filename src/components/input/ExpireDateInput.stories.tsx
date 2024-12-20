import type { Meta, StoryObj } from '@storybook/react';
import ExpireDateInput from './ExpireDateInput';

const meta = {
  title: 'Components/Input/ExpireDateInput',
  component: ExpireDateInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpireDateInput>;

export default meta;
type Story = StoryObj<typeof ExpireDateInput>;

export const Default: Story = {
  args: {
    onChange: (value) => console.log('Changed:', value),
    onFull: (e) => console.log('Full:', e),
  },
};

export const WithInitialValue: Story = {
  args: {
    ...Default.args,
    defaultValue: '12',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
