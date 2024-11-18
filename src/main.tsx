import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import Modal from './components/Modal.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <Modal />
      <App />
    </ModalProvider>
  </StrictMode>
);
