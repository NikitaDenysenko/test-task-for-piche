import Button from "../Button/Button.tsx";
import useOnThisDayEvents from "../../hooks/useOnThisDayEvents.ts";
import Modal from '../Modal/Modal.tsx'
import './styles.css'
import Spacer from "../Spacer/Spacer.tsx";
import {useEffect, useState} from "react";

const OnThisDay = () => {
    const { data: events = [], error, isLoading, refetch } = useOnThisDayEvents();
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleButtonClick = () => {
        refetch();
    };

    useEffect(() => {
        if (error) {
            setIsModalOpen(true);
        }
    }, [error]);

    return (
        <div className='container'>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              message={error ? error.message : ''}
            />
            <Spacer height='24px'/>
            <Button handleClick={handleButtonClick} />
            <Spacer height='24px'/>
            {isLoading && <p>Loading...</p>}
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event.year}: {event.text}</li>
                ))}
            </ul>
        </div>
    );
}
export default OnThisDay;