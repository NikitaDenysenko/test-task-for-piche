import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {OnThisDayEvents} from "../types.ts";

const fetchOnThisDayEvents = async (): Promise<OnThisDayEvents[]> => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const url = `${import.meta.env.VITE_WIKIPEDIA_API}/${month}/${day}`;

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            'Api-User-Agent': 'test-task-for-piche'
        }
    });

    const events = response.data.events
    if(response.data.events) {
        return events.map((event: OnThisDayEvents) => ({
            text: event.text,
            year: event.year,
        }));
    }

    return []
};

const useOnThisDayEvents = () => {
    return useQuery({
        queryKey: ['onThisDayEvents'],
        queryFn: fetchOnThisDayEvents,
        enabled: false,
    });
};

export default useOnThisDayEvents;