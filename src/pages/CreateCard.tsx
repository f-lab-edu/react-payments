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
import { colors } from '../constants/color.ts';

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
      <div style={{ padding: '1.25rem' }}>
        <header>
          <button
            onClick={historyBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            <ArrowIcon alt="뒤로가기" />
            카드추가
          </button>
        </header>
        <section className="flex flex-col gap-4 mt-5">
          <TitleBox title="카드 선택">
            <div
              style={{
                width: 'fit-content',
                margin: 'auto',
              }}
              onClick={() => setDrawerOpen(true)}
            >
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
            style={{
              backgroundColor: colors.mint,
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
            }}
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
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Title>{title}</Title>
      <Title>{subTitle}</Title>
    </div>
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: '0.75rem', lineHeight: '1rem', color: '#666' }}>
    {children}
  </div>
);

export default CreateCard;
