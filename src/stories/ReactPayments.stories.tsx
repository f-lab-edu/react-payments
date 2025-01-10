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

export const WithCustomStyles: Story = {
  args: {
    // 커스텀 스타일 props 예시
  },
  parameters: {
    docs: {
      description: {
        story: '결제 모듈의 기본 사용 예시입니다.',
      },
    },
  },
};
