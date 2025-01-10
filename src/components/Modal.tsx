import { useModal } from '../contexts/hooks/useModal';
import { useOutsideClick } from '../hook/useOutsideClick';
const Modal = () => {
  const { isOpen, content, closeModal } = useModal();
  const handleModalClose = () => {
    window.confirm('정말로 닫으시겠습니까?') && closeModal();
  };
  const ref = useOutsideClick(handleModalClose);

  return isOpen ? (
    <div
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '375px',
          height: '700px',
          backgroundColor: 'white',
          margin: 'auto',
          borderRadius: '10px',
        }}
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
