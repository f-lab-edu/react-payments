import { useModal } from '../hook/useModal';
import { useOutsideClick } from '../hook/useOutsideClick';

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();
  const handleModalClose = () => {
    window.confirm('정말로 닫으시겠습니까?') && closeModal();
  };
  const ref = useOutsideClick(handleModalClose);

  return isOpen ? (
    <div className="flex fixed inset-0 justify-center items-center bg-gray-300 w-full h-screen backdrop-blur-sm">
      <div
        className="w-[375px] h-[700px] bg-white m-auto rounded-lg p-4"
        ref={ref}
      >
        {content}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;

export const SamplePage = () => {
  const { setModal, closeModal } = useModal();
  return (
    <div>
      <div>샘플 모달 창</div>
      <button onClick={() => setModal(<div>변경된 창</div>)}>모달 변경</button>
      <button onClick={closeModal}>모달 닫기</button>
    </div>
  );
};
