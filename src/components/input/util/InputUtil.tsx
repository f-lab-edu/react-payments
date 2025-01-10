export const handleFull: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  const $nextEl = e.target.nextElementSibling;
  if ($nextEl instanceof HTMLInputElement) {
    $nextEl.focus();
  }
};

export const focusNextInput: React.ChangeEventHandler<HTMLInputElement> = (
  e
) => {
  const inputs = Array.from(document.querySelectorAll('input'));

  // 현재 이벤트가 발생한 요소
  const currentInput = e.target as HTMLInputElement;

  // 현재 input 요소의 인덱스 찾기
  const currentIndex = inputs.indexOf(currentInput);

  // 다음 input 요소에 포커스
  if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
    const nextInput = inputs[currentIndex + 1];
    nextInput.focus();
  }
};
