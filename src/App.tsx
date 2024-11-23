import PaymentMain from './pages/PaymentMain';
import { useModal } from './contexts/hooks/useModal.tsx';

function App() {
  const { setModal } = useModal();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-screen-md text-center">
        <div>결제 모듈 미션</div>
        <button
          className="bg-mint p-2 text-white mt-5"
          onClick={() => setModal(<PaymentMain />)}
        >
          모달 열기
        </button>
      </div>
    </div>
  );
}

export default App;
