import { createContext, FC, ReactNode, useState } from 'react';

// Modal Context 타입 정의
export interface ModalContextType {
  isOpen: boolean;
  content: ReactNode;
  setModal: (content: ReactNode) => void;
  closeModal: () => void;
  historyBack: () => void;
}

// Context 초기값 설정
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

// Context Provider 컴포넌트
export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<ReactNode[]>([]);
  const [content, setContent] = useState<number>(-1);

  const openModal = (modalContent: ReactNode) => {
    setHistory([...history, modalContent]);
    setContent(history.length);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setHistory([]);
    setContent(-1);
  };

  const historyBack = () => {
    if (content > 0) {
      history.pop();
      setContent(content - 1);
    } else {
      closeModal();
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        content: content >= 0 && history[content],
        setModal: openModal,
        closeModal,
        historyBack,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
