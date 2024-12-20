import { useModal } from '../../contexts/hooks/useModal.tsx';
import { useState } from 'react';
import { CardType } from '../../storage/cardType.ts';
import CreateCardComplete from '../CreateCardComplete.tsx';

export default function useCreateCard() {
  const { setModal } = useModal();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [cardData, setCardData] = useState<CardType>({
    cardCompany: '',
    cardColor: '',
    cardNumber: '',
    userName: '',
    cvcCode: '',
    expiredDate: '',
    cardAlias: '',
    password: '',
  });
  // const { addCard } = useCardStore();

  const companyHandler = (cardCompany: string, cardColor: string) => {
    setCardData({ ...cardData, cardCompany, cardColor });
    setDrawerOpen(false);
  };

  const cardNumberHandler = (cardNumber: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = cardNumber.replace(/[^0-9]/g, '');

    // 문자열을 4개씩 자르기
    const chunks = sanitizedInput.match(/.{1,4}/g) || [];
    // 4자리 이후는 제거
    const formatted = chunks.slice(0, 4);

    setCardData({ ...cardData, cardNumber: formatted.join('-') });
  };

  const changeCardName = (name: string) => {
    setCardData({ ...cardData, userName: name });
  };

  const expiredDateHandler = (date: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = date.replace(/[^0-9]/g, '');

    // 2자리씩 자르기
    const chunks = sanitizedInput.match(/.{1,2}/g) || [];

    // 4자리 이상은 입력 불가
    const formatted = chunks.slice(0, 2);

    setCardData({ ...cardData, expiredDate: formatted.join('/') });
  };

  const cardCvcHandler = (cvcCode: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = cvcCode.replace(/[^0-9]/g, '');
    // 3자리 이상은 입력 불가
    const formatted = sanitizedInput.slice(0, 3);

    setCardData({ ...cardData, cvcCode: formatted });
  };

  const checkCardData = (cardData: CardType) => {
    // 카드 넘버 유효성 검사. 16자리 숫자
    if (cardData.cardNumber.replace(/[^0-9]/g, '').length !== 16) {
      alert('카드번호를 확인해주세요. 16자리 숫자입니다.');
      return false;
    }
    // 만료일 유효성 검사. MM/YY
    if (cardData.expiredDate.replace(/[^0-9]/g, '').length !== 4) {
      alert('만료일을 확인해주세요');
      return false;
    }
    // 카드 소유자 유효성 검사. 1자 이상
    if (cardData.userName.length < 1) {
      alert('카드 소유자를 확인해주세요');
      return false;
    }
    // CVC 유효성 검사. 3자리 숫자
    if (cardData.cvcCode.replace(/[^0-9]/g, '').length !== 3) {
      alert('CVC를 확인해주세요');
      return false;
    }
    // 카드사 유효성 검사. 1자 이상
    if (cardData.cardCompany.length < 1) {
      alert('카드사를 확인해주세요');
      return false;
    }
    return true;
  };

  const registerCard = () => {
    if (!checkCardData(cardData)) {
      return;
    }

    setModal(<CreateCardComplete card={cardData} />);
  };

  const passwordHandler = (password: string) => {
    setCardData({ ...cardData, password });
  };

  return {
    cardData,
    drawerOpen,
    setDrawerOpen,
    companyHandler,
    cardNumberHandler,
    changeCardName,
    expiredDateHandler,
    cardCvcHandler,
    checkCardData,
    registerCard,
    passwordHandler,
  };
}
