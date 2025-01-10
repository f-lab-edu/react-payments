import type { Meta, StoryObj } from '@storybook/react';
import CvcInput from './CvcInput';

const meta: Meta<typeof CvcInput> = {
  title: 'Components/Input/CvcInput',
  component: CvcInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CvcInput>;

export const Default: Story = {
  args: {
    onChange: (value: string) => console.log('CVC value:', value),
  },
};

export const WithInitialValue: Story = {
  args: {
    onChange: (value: string) => console.log('CVC value:', value),
  },
};
