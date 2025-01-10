import { useCardContext } from '../contexts/CardContext.tsx';

export default function useCardStorage() {
  return useCardContext();
}
