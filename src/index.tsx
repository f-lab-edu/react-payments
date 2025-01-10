import { ModalProvider } from './contexts/ModalContext.tsx';
import App from './App.tsx';
import { CardProvider } from './contexts/CardContext.tsx';

export const ReactPayments = () => {
  return (
    <CardProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CardProvider>
  );
};

export default ReactPayments;
