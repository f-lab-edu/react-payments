import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ModalProvider } from './contexts/ModalContext';
import { CardProvider } from './contexts/CardContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CardProvider>
  </StrictMode>
);
