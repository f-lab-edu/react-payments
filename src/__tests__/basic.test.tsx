import { render, screen } from '@testing-library/react';
import App from '../App';
import { useModal } from '../contexts/hooks/useModal';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../contexts/hooks/useModal', () => ({
  useModal: vi.fn(),
}));

describe('basic test', () => {
  beforeEach(() => {
    (useModal as Mock).mockReturnValue({
      setModal: vi.fn(),
    });
  });

  it('sample test', () => {
    render(<App />);
    const element = screen.getByText('모달 열기');
    expect(element).toBeDefined();
  });
});
