import { useState } from 'react';
import { useModal } from '../hook/useModal';
import { useOutsideClick } from '../hook/useOutsideClick';
import Card from './Card';
import { cardType } from '../types/cardType';

const Modal = () => {
  const { isOpen, content, closeModal } = useModal();
  const handleModalClose = () => {
    window.confirm('정말로 닫으시겠습니까?') && closeModal();
  };
  const ref = useOutsideClick(handleModalClose);

  return isOpen ? (
    <div className="flex fixed inset-0 justify-center items-center bg-gray-300 w-full h-screen backdrop-blur-sm">
      <div className="w-[375px] h-[700px] bg-white m-auto rounded-lg" ref={ref}>
        {content}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
