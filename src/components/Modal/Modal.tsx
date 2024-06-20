import './styles.css'
import IconClose from "./IconClose.tsx";
import { FC } from 'react'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const Modal:FC<ModalProps>  = ({isOpen, onClose, message}) => {
    return (
        <>
            {isOpen && (
                <div className='modal'>
                    <div className='modal-wrapper'>
                        <div className='modal-content'>
                            <button className='modal-close-button' onClick={onClose}>
                                <IconClose/>
                            </button>
                            {message}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;