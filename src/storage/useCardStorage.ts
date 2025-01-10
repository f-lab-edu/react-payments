import { useCardContext } from '../contexts/CardContext';

export default function useCardStorage() {
  return useCardContext();
}
