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
    // 문자열을 4개씩 자르기
    const chunks = sanitizedInput.match(/.{1,4}/g) || [];

    // 16자리 이상은 입력 불가
    if (chunks.length > 4) return;

    setCardData({ ...cardData, cardNumber: chunks.join('-') });
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
    if (chunks.length > 2) return;

    setCardData({ ...cardData, expiredDate: chunks.join('/') });
  };

  const cardCvcHandler = (cvcCode: string) => {
    // 숫자가 아니면 제거
    const sanitizedInput = cvcCode.replace(/[^0-9]/g, '');
    // 3자리 이상은 입력 불가
    if (sanitizedInput.length > 3) return;

    setCardData({ ...cardData, cvcCode: sanitizedInput });
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
