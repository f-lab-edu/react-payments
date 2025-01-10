import type { Meta, StoryObj } from '@storybook/react';
import InputBox from './InputBox';

const meta = {
  title: 'Components/Input/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  args: {
    children: 'Input Box Content',
    className: 'p-4',
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: 'Custom Styled Input Box',
    className: 'p-6 bg-red-300',
  },
};

export const WithNestedContent: Story = {
  args: {
    children: (
      <div>
        <h3 className="font-bold">Nested Content</h3>
        <p>This is nested content inside InputBox</p>
      </div>
    ),
    className: 'p-4',
  },
};
