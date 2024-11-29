import { useModal } from '../../contexts/hooks/useModal.tsx';
import { useState } from 'react';
import { CardType } from '../../storage/cardType.ts';
import CreateCardComplete from '../CreateCardComplete.tsx';

export default function useCreateCard() {
  const { setModal } = useModal();
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    console.log(sanitizedInput);
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

  const registerCard = () => {
    // TODO : 데이터 입력 확인 및 유효성 검사 필요
    setModal(<CreateCardComplete card={cardData} />);
    // addCard(cardData);
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
    registerCard,
  };
}
