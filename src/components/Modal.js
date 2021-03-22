import React from 'react';


import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { backdrop } from '../Animation/index';
import { BluredBg } from '../styles/Modal.elements';






const Modal = ({ showContactModal, setShowContactModal }) => {

    // const toggleModal = (e) => {
    //     setShowContactModal(!showContactModal)
    // }

    return (
        <AnimatePresence exitBeforeEnter>
            {showContactModal && (
                <BluredBg as={motion.div}
                    variants={backdrop}
                    initial="initialState"
                    animate="hidden"

                // showContactModal={showContactModal}
                // onBackgroundClick={toggleModal}
                // onEscapeKeydown={toggleModal}
                >

                </BluredBg>
            )}
        </AnimatePresence>
    )
}

export default Modal;
