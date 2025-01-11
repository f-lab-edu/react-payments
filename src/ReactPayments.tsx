import { ModalProvider } from './contexts/ModalContext.tsx';
import App from './App.tsx';
import { CardProvider } from './contexts/CardContext.tsx';
import { PropsWithChildren } from 'react';
import { CardType } from './storage/cardType.ts';
import Modal from './components/Modal.tsx';
import { ModalOpen } from './components/ModalOpen.tsx';

const ReactPaymentsContent = () => {
  return <App />;
};

const ReactPaymentsRoot = ({
  children,
  onChange,
}: PropsWithChildren<{
  onChange: (value: CardType[]) => void;
}>) => {
  return (
    <CardProvider onChange={onChange}>
      <ModalProvider>
        {children}
      </ModalProvider>
    </CardProvider>
  );
};

const ReactPayments = {
  Content: ReactPaymentsContent,
  Root: ReactPaymentsRoot,
  Modal: Modal,
  ModalOpen: ModalOpen,
};

export default ReactPayments;
