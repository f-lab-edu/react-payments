import React from 'react';
import App from './App';
import { ModalProvider } from './contexts/ModalContext';
import { CardProvider } from './contexts/CardContext';

class ReactPayments extends React.Component {
  render() {
    return (
      <CardProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CardProvider>
    );
  }
}

export default ReactPayments;
