import { createRoot } from 'react-dom/client';
import ReactPayments from './index.tsx';

createRoot(document.getElementById('root')!).render(
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ReactPayments />
  </div>
);
