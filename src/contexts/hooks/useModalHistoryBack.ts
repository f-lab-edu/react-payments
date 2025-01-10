import { useModal } from './useModal';

export default function useModalHistoryBack() {
  const { historyBack } = useModal();
  return historyBack;
}
