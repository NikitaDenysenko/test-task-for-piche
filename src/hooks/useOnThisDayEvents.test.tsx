import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import useOnThisDayEvents from './useOnThisDayEvents.ts';
import {renderHook, waitFor} from "@testing-library/react";

vi.mock('axios');

describe('useOnThisDayEvents', () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    beforeEach(() => {
        vi.clearAllMocks();
    });

    afterEach(() => {
        queryClient.clear();
    });

    it('fetches and returns the events successfully', async () => {
        const mockEvents = [
            { text: 'Event 1', year: 2000 },
            { text: 'Event 2', year: 2010 },
        ];

        (axios.get as any).mockResolvedValue({
            data: { events: mockEvents },
        });

        const { result } = renderHook(() => useOnThisDayEvents(), { wrapper });

        result.current.refetch();

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        expect(result.current.data).toEqual(mockEvents);
    });
});
