import PaymentMain from './pages/PaymentMain';
import { useModal } from './contexts/hooks/useModal';
import { colors } from './constants/color';

function App() {
  const { setModal } = useModal();
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 'screen-md',
          textAlign: 'center',
        }}
      >
        <div>결제 모듈 미션</div>
        <button
          style={{
            backgroundColor: colors.mint,
            padding: '8px',
            color: 'white',
            marginTop: '20px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          onClick={() => setModal(<PaymentMain />)}
        >
          모달 열기
        </button>
      </div>
    </div>
  );
}

export default App;
