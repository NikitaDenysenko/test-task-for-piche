import {useState} from "react";
import axios from "axios";
import Button from "./Button.tsx";

const OnThisDay = () => {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchOnThisDayEvents = async () => {
        setLoading(true);
        setError(null);
        try {
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
            setEvents(response.data.events || []);
        } catch (error) {
            setError('Error fetching data from Wikipedia API');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button handleClick={fetchOnThisDayEvents} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event.year}: {event.text}</li>
                ))}
            </ul>
        </div>
    )
}
export default OnThisDay;