import type { Meta, StoryObj } from '@storybook/react';
import { CardType, ReactPayments } from '../index';
import { useEffect, useState } from 'react';
import { colors } from '../constants/color';

const meta = {
  title: 'Components/ReactPayments',
  component: ReactPayments.Root,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReactPayments.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 필요한 props가 있다면 여기에 추가
  },
};

const TestComponent = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    console.log('카드 목록이 수정되었습니다.', cards);
  }, [cards]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ReactPayments.Root onChange={setCards}>
        <ReactPayments.ModalOpen>
          <button
            style={{
              backgroundColor: colors.mint,
              padding: '8px',
              color: 'white',
              marginTop: '20px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100px'
            }}
          >
            모달 열기
          </button>
        </ReactPayments.ModalOpen>

        <ReactPayments.ModalOpen>
          <button
            style={{
              backgroundColor: colors.blue,
              fontSize: "12px",
              padding: '10px',
              color: 'white',
              marginLeft: '10px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100px'
            }}
          >
            모달 열기2
          </button>
        </ReactPayments.ModalOpen>

        이것은 콘텐츠입니다.
        <ReactPayments.Modal />
      </ReactPayments.Root>
    </div>
  );
};

export const MultipleComponents: Story = {
  render: () => <TestComponent />,
  parameters: {
    docs: {
      description: {
        story: '여러 결제 모듈을 동시에 표시하는 예시입니다.',
      },
    },
  },
};
