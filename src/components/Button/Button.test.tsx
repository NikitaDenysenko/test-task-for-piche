import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
    it('renders correctly', () => {
        const handleClick = vi.fn();
        render(<Button handleClick={handleClick} />);

        const button = screen.getByRole('button', { name: "Get Today's Events" });
        expect(button).toBeInTheDocument();
    });

    it('calls handleClick when clicked', () => {
        const handleClick = vi.fn();
        render(<Button handleClick={handleClick} />);

        const button = screen.getByRole('button', { name: "Get Today's Events" });
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
