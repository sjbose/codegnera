import React from "react";
import { ModalBox, CloseButton, ModalContent } from "../styles/Modal.elements";

import ContactForm from "./ContactFormCTA";

const ModalVariants = {
    opened: {
        y: 50
    },

    closed: { y: 0 }
};

const ModalContentVariants = {
    opened: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1
        }
    },
    closed: { y: -30, opacity: 0 }
};

const Modal = ({ showModal, closeModal }) => {
    return (
        <>
            {showModal && (
                <ModalBox
                    variants={ModalVariants}
                    animate={showModal ? "opened" : "closed"}
                    initial={"closed"}
                >

                    <ModalContent
                        variants={ModalContentVariants}
                        animate={showModal ? "opened" : "closed"}
                    >
                        <h1>Hey! Tell us all<br></br>
                            the things 👋</h1>
                        <h3>Choose the type of service you want</h3>
                        <ContactForm />
                    </ModalContent>
                    <CloseButton onClick={closeModal} />


                </ModalBox>

            )}

        </>
    );
};

export default Modal;