import  { useState } from 'react';
import './ModalComponent.css';
const ModalComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal}>Open Modal</button>

            {isOpen && <div className="blurcontainer" onClick={toggleModal}></div>}
            <div className={`modal ${isOpen ? 'modal-enter-active' : 'modal-enter'}`}>
                <span className="close-btn" onClick={toggleModal}>
                    &times;
                </span>
                <h2>Modal Title</h2>
                <p>This is the modal content. You can add any content here.</p>
            </div>
        </>
    );
};

export default ModalComponent;
