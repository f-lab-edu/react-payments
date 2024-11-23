import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import Modal from './components/Modal.tsx';
import { CardProvider } from './contexts/CardContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardProvider>
      <ModalProvider>
        <Modal />
        <App />
      </ModalProvider>
    </CardProvider>
  </StrictMode>
);
