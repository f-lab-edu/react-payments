import { ModalProvider } from './contexts/ModalContext.tsx';
import App from './App.tsx';
import { CardProvider } from './contexts/CardContext.tsx';

const Payments = () => {
  return (
    <CardProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CardProvider>
  );
};

export default Payments;
