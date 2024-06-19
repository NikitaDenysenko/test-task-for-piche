import Button from "../Button/Button.tsx";
import useOnThisDayEvents from "../../hooks/useOnThisDayEvents.ts";
import './styles.css'
import Spacer from "../Spacer/Spacer.tsx";

const OnThisDay = () => {
    const { data: events = [], error, isLoading, refetch } = useOnThisDayEvents();

    const handleButtonClick = () => {
        refetch();
    };

    return (
        <div className='container'>
            <Spacer height='24px'/>
            <Button handleClick={handleButtonClick} />
            <Spacer height='24px'/>
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