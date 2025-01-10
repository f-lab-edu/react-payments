import type { Meta, StoryObj } from '@storybook/react';
import ReactPayments from '../index';

const meta = {
  title: 'Components/ReactPayments',
  component: ReactPayments,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReactPayments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 필요한 props가 있다면 여기에 추가
  },
};

export const MultipleComponents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ReactPayments />
      <ReactPayments />
      <ReactPayments />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '여러 결제 모듈을 동시에 표시하는 예시입니다.',
      },
    },
  },
};
