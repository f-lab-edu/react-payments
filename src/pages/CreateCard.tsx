import React, { ReactNode } from 'react';
import ArrowIcon from '../components/icons/ArrowIcon';
import Card from '../components/Card';
import SelectCardCompany from '../components/SelectCardCompany';
import useCreateCard from './hooks/useCreateCard.tsx';
import useModalHistoryBack from '../contexts/hooks/useModalHistoryBack.ts';
import Input from '../components/input/Input.tsx';
import CardNumberInput from '../components/input/CardNumberInput.tsx';

const INPUT_STYLE = 'bg-gray-200 p-3 rounded-md text-mint font-bold';

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
  } = useCreateCard();

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
          <div className="w-fit m-auto">
            <Card data={cardData} onClick={() => setDrawerOpen(true)} />
          </div>

          <TitleBox title="카드번호">
            <CardNumberInput onChange={(v) => cardNumberHandler(v)} />
          </TitleBox>

          <TitleBox title="유효기간">
            <Input
              type="text"
              placeholder="유효기간"
              className={`w-[100px] text-center`}
              value={cardData.expiredDate}
              maxLength={4}
              onFull={(e) => console.log('111')}
              onChange={(v) => expiredDateHandler(v.target.value)}
            />
          </TitleBox>

          <TitleBox title="카드소유자">
            <input
              type="text"
              placeholder="카드 소유자"
              className={`${INPUT_STYLE}`}
              value={cardData.userName}
              onChange={(v) => changeCardName(v.target.value)}
            />
          </TitleBox>

          <TitleBox title="보안코드(CVC/CVV)">
            <input
              type="password"
              placeholder="CVC/CVV"
              className={`${INPUT_STYLE} w-[100px] text-center`}
              value={cardData.cvcCode}
              onChange={(v) => cardCvcHandler(v.target.value)}
            />
          </TitleBox>

          <TitleBox title="카드 비밀번호">
            <div className="flex gap-3 items-center ">
              <input
                type="password"
                className={`${INPUT_STYLE} w-[50px] text-center`}
                maxLength={1}
              />
              <input
                type="password"
                className={`${INPUT_STYLE} w-[50px] text-center`}
                maxLength={1}
              />
              <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
              <div className="w-1 aspect-square rounded-full bg-mint mx-4" />
            </div>
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
  children,
}: {
  title: ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <Title>{title}</Title>
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-gray-600">{children}</div>
);

export default CreateCard;
