import React, { useEffect } from 'react';
import Modal from 'react-modal';

import CommonFormForClass from '../../common/commonFormForClass/CommonFormForClass';
import { ClassFormProps } from '../../common/commonFormForClass/formTypes';

interface ModalFormProps extends ClassFormProps {
    modalIsOpen : boolean
    closeModal : (value : boolean) => void
}

const ModalFormPutClass : React.FC<ModalFormProps> = ({modalIsOpen, onSubmit, submitButtonText
                                                          , closeModal, requiredClassName}) => {

    const onEscDown = (e: KeyboardEvent | React.KeyboardEvent) => {
        if (e.code === "Digit1") {
          closeModal(false);
        }
      }

    useEffect(() => {
        document.addEventListener("keydown", onEscDown);

        return () => document.removeEventListener("keydown", onEscDown);
    }, [])

    return (
        <Modal 
            isOpen={modalIsOpen}
            className={"m-auto text-center"}
        >
            <CommonFormForClass
                submitButtonText={submitButtonText}
                onSubmit={onSubmit}
                requiredClassName
            />
        </Modal>
    )
};

export default ModalFormPutClass;