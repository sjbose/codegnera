import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { ContactForm } from '../styles/ContactFormCTA.elemets'




const initialValues = {
    choice: [],
    name: '',
    email: '',
    message: '',

}
const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid format'),
    message: Yup.string().required('Required'),
    // choice: Yup.array()
    //     .min(1, 'Pick at least 1 tags')
    //     .of(
    //         Yup.object().shape({
    //             label: Yup.string().required(),
    //             value: Yup.string().required(),
    //         })
    //     ),
})

const onSubmit = (values, submitProps) => {
    console.log('Form data', values);
    // onSubmitProps.setSubmitting(false)
    submitProps.resetForm()
}


const ContactFormCTA = () => {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <ContactForm>
                {/* <div className='formControl'>
                    <label htmlFor="choice" style={{ display: 'none' }}>Interested in</label>

                    <SelectOption id='choice' name='choice' as='select' />
                    <ErrorMessage name='choice' />
                </div> */}
                <div className='formControl'>

                    <label htmlFor='name' style={{ display: 'none' }}>name</label>

                    <Field type='text' id='name' name='name'
                        placeholder='Name' />

                    <ErrorMessage name='name' />

                </div>
                <div className='formControl' >

                    <label htmlFor='email' style={{ display: 'none' }}>email</label >

                    <Field type='text' id='email' name='email'
                        placeholder='Email'
                    />

                    <ErrorMessage name='email' />

                </div>
                <div className='formControl'>

                    <label htmlFor='message' style={{ display: 'none' }}>message</label>

                    <Field as='textarea' id='message' name='message'
                        placeholder='Tell us something about your project' />

                    <ErrorMessage name='message' />

                </div>


                <button type='submit' aria-label="submit">Submit</button>
            </ContactForm>

        </Formik>
    )
}

export default ContactFormCTA
