import React from 'react';
import Modal from 'react-modal';



const OptionModal = (props) => (
    <Modal
        isOpen = {props.ModalsOn}
        onRequestClose = {props.handleModaloff}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Are you sure to remove</h3>
    <div className="list-item__confirm">
            <button className="button" onClick={props.onRemove}>yes</button>
            <button className="button" onClick={props.handleModaloff}>no</button>
    </div>
       
    </Modal>
);

export default OptionModal;