import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ModalProvider } from './contexts/ModalContext.tsx';
import { CardProvider } from './contexts/CardContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CardProvider>
  </StrictMode>
);
