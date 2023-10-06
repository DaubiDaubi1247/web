import React from 'react';
import Modal from 'react-modal';

import FormForUploadClass from "../formForUpload/FormForUploadClass";

interface ModalFormProps {
    modalIsOpen : boolean
}

const ModalFormPutClass : React.FC<ModalFormProps> = ({modalIsOpen}) => {

    return (
        <Modal isOpen={modalIsOpen}>
            <FormForUploadClass />
        </Modal>
    )
};

export default ModalFormPutClass;