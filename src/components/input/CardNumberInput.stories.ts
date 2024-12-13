import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

const meta = {
  title: 'Input/CardNumberInput',
  component: CardNumberInput,
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
};
