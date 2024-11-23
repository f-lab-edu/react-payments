import { act, renderHook } from '@testing-library/react';
import useCreateCard from '../useCreateCard';
import { useModal } from '../../../contexts/hooks/useModal';
import { vi, describe, beforeEach, it, expect } from 'vitest';

// useModal mock
vi.mock('../../../contexts/hooks/useModal', () => ({
  useModal: vi.fn(),
}));

describe('useCreateCard', () => {
  // 각 테스트 전에 실행될 설정
  beforeEach(() => {
    (useModal as any).mockReturnValue({
      setModal: vi.fn(),
    });
  });

  it('초기 상태값이 올바르게 설정되어야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    expect(result.current.drawerOpen).toBe(false);
    expect(result.current.cardData).toEqual({
      cardCompany: '',
      cardColor: '',
      cardNumber: '',
      userName: '',
      cvcCode: '',
      expiredDate: '',
      cardAlias: '',
      password: '',
    });
  });

  it('companyHandler가 카드 회사와 색상을 올바르게 설정해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.companyHandler('신한카드', 'blue');
    });

    expect(result.current.cardData.cardCompany).toBe('신한카드');
    expect(result.current.cardData.cardColor).toBe('blue');
    expect(result.current.drawerOpen).toBe(false);
  });

  it('cardNumberHandler가 카드 번호를 올바른 형식으로 포맷팅해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.cardNumberHandler('1234567890123456');
    });

    expect(result.current.cardData.cardNumber).toBe('1234-5678-9012-3456');
  });

  it('cardNumberHandler가 16자리 이상의 숫자를 무시해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.cardNumberHandler('12345678901234567');
    });

    expect(result.current.cardData.cardNumber).toBe('1234-5678-9012-3456');
  });

  it('cardNumberHandler가 숫자가 아닌 문자를 제거해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.cardNumberHandler('1234-abcd-5678-efgh');
    });

    expect(result.current.cardData.cardNumber).toBe('1234-5678');
  });

  it('changeCardName이 사용자 이름을 올바르게 설정해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.changeCardName('홍길동');
    });

    expect(result.current.cardData.userName).toBe('홍길동');
  });

  it('expiredDateHandler가 만료일을 올바른 형식으로 포맷팅해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.expiredDateHandler('1225');
    });

    expect(result.current.cardData.expiredDate).toBe('12/25');
  });

  it('expiredDateHandler가 4자리 이상의 숫자를 무시해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.expiredDateHandler('122534');
    });

    expect(result.current.cardData.expiredDate).toBe('12/25');
  });

  it('cardCvcHandler가 CVC 코드를 올바르게 설정해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.cardCvcHandler('123');
    });

    expect(result.current.cardData.cvcCode).toBe('123');
  });

  it('cardCvcHandler가 3자리 이상의 숫자를 무시해야 한다', () => {
    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.cardCvcHandler('1234');
    });

    expect(result.current.cardData.cvcCode).toBe('123');
  });

  it('registerCard가 모달을 올바르게 설정해야 한다', () => {
    const mockSetModal = vi.fn();
    (useModal as vi.Mock).mockReturnValue({
      setModal: mockSetModal,
    });

    const { result } = renderHook(() => useCreateCard());

    act(() => {
      result.current.registerCard();
    });

    expect(mockSetModal).toHaveBeenCalled();
  });
});
