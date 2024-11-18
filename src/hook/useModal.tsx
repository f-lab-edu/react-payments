import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../contexts/ModalContext';

// Context를 사용하기 위한 커스텀 Hook
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
