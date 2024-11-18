import { SamplePage } from './components/Modal';
import { useModal } from './hook/useModal';

function App() {
  const { setModal } = useModal();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-screen-md">
        <div>결제 모듈 미션 Init</div>
        <button onClick={() => setModal(<SamplePage />)}>모달 열기</button>
      </div>
    </div>
  );
}

export default App;
