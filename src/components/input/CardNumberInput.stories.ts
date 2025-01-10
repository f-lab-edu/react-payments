import { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

const meta = {
  title: 'Components/Input/CardNumberInput',
  component: CardNumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '카드 번호를 입력해주세요',
    onChange: (value) => console.log('Changed value:', value),
  },
};
