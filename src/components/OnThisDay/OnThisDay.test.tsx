import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import OnThisDay from './OnThisDay';

vi.mock('axios');

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('OnThisDay', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetches and displays events successfully', async () => {
        const mockEvents = [
            { text: 'Event 1', year: 2000 },
            { text: 'Event 2', year: 2010 },
        ];

        (axios.get as any).mockResolvedValue({
            data: { events: mockEvents },
        });

        render(<OnThisDay />, { wrapper });

        fireEvent.click(screen.getByRole('button', { name: /get today's events/i }));

        await waitFor(() => expect(screen.queryByText('Get Today\'s Events')).toBeInTheDocument());

        mockEvents.forEach(event => {
            expect(screen.getByText(`${event.year}: ${event.text}`)).toBeInTheDocument();
        });
    });
});
