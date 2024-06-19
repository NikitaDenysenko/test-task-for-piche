import Button from "./Button.tsx";
import useOnThisDayEvents from "../hooks/useOnThisDayEvents.ts";

const OnThisDay = () => {
    const { data: events = [], error, isLoading, refetch } = useOnThisDayEvents();

    const handleButtonClick = () => {
        refetch();
    };

    return (
        <div>
            <Button handleClick={handleButtonClick} />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error fetching data from Wikipedia API</p>}
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event.year}: {event.text}</li>
                ))}
            </ul>
        </div>
    );
}
export default OnThisDay;