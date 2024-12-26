import React, { ReactNode } from 'react';
import ArrowIcon from '../components/icons/ArrowIcon';
import Card from '../components/Card';
import SelectCardCompany from '../components/drawer/SelectCardCompany.tsx';
import useCreateCard from './hooks/useCreateCard.tsx';
import useModalHistoryBack from '../contexts/hooks/useModalHistoryBack.ts';
import CardNumberInput from '../components/input/CardNumberInput.tsx';
import ExpireDateInput from '../components/input/ExpireDateInput.tsx';
import PasswordInput from '../components/input/PasswordInput.tsx';
import CvcInput from '../components/input/CvcInput.tsx';
import { focusNextInput } from '../components/input/util/InputUtil.tsx';
import NameInput from '../components/input/NameInput.tsx';
import useCardName, { DEFAULT_MAX_SIZE } from './hooks/useCardName.ts';

const CreateCard = () => {
  const historyBack = useModalHistoryBack();

  const {
    drawerOpen,
    setDrawerOpen,
    cardData,
    companyHandler,
    registerCard,
    changeCardName,
    expiredDateHandler,
    cardNumberHandler,
    cardCvcHandler,
    passwordHandler,
  } = useCreateCard();

  const cardName = useCardName(DEFAULT_MAX_SIZE, changeCardName);

  return (
    <>
      <SelectCardCompany
        isOpen={drawerOpen}
        setIsOpen={setDrawerOpen}
        selectCallback={companyHandler}
      />
      <div className="p-5">
        <header>
          <button
            onClick={historyBack}
            className="flex items-center justify-center gap-5"
          >
            <ArrowIcon alt="뒤로가기" />
            카드추가
          </button>
        </header>
        <section className="flex flex-col gap-4 mt-5">
          <TitleBox title="카드 선택">
            <div className="w-fit m-auto" onClick={() => setDrawerOpen(true)}>
              <Card data={cardData} />
            </div>
          </TitleBox>

          <TitleBox title="카드번호">
            <CardNumberInput
              onChange={(v) => cardNumberHandler(v)}
              onFull={focusNextInput}
            />
          </TitleBox>

          <TitleBox title="유효기간">
            <ExpireDateInput
              onChange={(v) => expiredDateHandler(v)}
              onFull={focusNextInput}
            />
          </TitleBox>

          <TitleBox title="카드소유자" subTitle={cardName.size}>
            <NameInput onChange={cardName.onChange} />
          </TitleBox>

          <TitleBox title="보안코드(CVC/CVV)">
            <CvcInput onChange={(v) => cardCvcHandler(v)} />
          </TitleBox>

          <TitleBox title="카드 비밀번호">
            <PasswordInput onChange={(v) => passwordHandler(v)} />
          </TitleBox>

          <button
            className="bg-mint text-white p-2 rounded-lg"
            onClick={registerCard}
          >
            등록
          </button>
        </section>
      </div>
    </>
  );
};

const TitleBox = ({
  title,
  subTitle,
  children,
}: {
  title: ReactNode;
  subTitle?: ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between">
      <Title>{title}</Title>
      <Title>{subTitle}</Title>
    </div>
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-gray-600">{children}</div>
);

export default CreateCard;
