import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Input/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
