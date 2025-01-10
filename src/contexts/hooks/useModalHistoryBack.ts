import { useModal } from './useModal.tsx';

export default function useModalHistoryBack() {
  const { historyBack } = useModal();
  return historyBack;
}
