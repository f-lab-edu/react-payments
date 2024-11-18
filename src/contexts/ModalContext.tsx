import { createContext, useState, ReactNode, FC } from 'react';

// Modal Context 타입 정의
export interface ModalContextType {
  isOpen: boolean;
  content: ReactNode;
  setModal: (content: ReactNode) => void;
  closeModal: () => void;
}

// Context 초기값 설정
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

// Context Provider 컴포넌트
export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = (modalContent: ReactNode) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, content, setModal: openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
