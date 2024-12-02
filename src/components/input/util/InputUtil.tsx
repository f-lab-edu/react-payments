export const handleFull: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  const $nextEl = e.target.nextElementSibling;
  if ($nextEl instanceof HTMLInputElement) {
    $nextEl.focus();
  }
};
