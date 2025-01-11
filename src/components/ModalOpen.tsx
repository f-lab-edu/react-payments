import { useModal } from '../contexts/hooks/useModal.tsx';
import PaymentMain from '../pages/PaymentMain.tsx';
import { cloneElement, PropsWithChildren } from 'react';

// children에 onClick을 하면 모달이 열리는 버튼을 만들어주세요.

export const ModalOpen = ({ children }: PropsWithChildren) => {
  const { setModal } = useModal();
  return cloneElement(children, { onClick: () => setModal(<PaymentMain />) });
};
