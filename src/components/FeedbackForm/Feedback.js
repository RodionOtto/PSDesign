import React from 'react';
import { Formik } from 'formik';
import './Feedback.css';

const FeedbackForm = () => {

    return (
    <div className='FeedbackForm'>
        <div className='FeedbackForm__wrap'>
            <div className="blue-dot"></div>
            <h3 className='FeedbackForm__header'>получить консультацию</h3>
        </div>

    <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Введите адрес электронной почты';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Неверный адрес электронной почты';
            } else if (!values.name) {
                errors.name = "Введите имя";
            } else if (!values.phone) {
                errors.phone = 'Введите номер телефона';
            }
            return errors;
            }}

        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
    >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
            <form onSubmit={handleSubmit} className='form'>

                <label htmlFor="name" className='form__label'>Имя</label>
                <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder='Введите имя'
                className='form__input'
                lang='ru'
            />
            {errors.name && touched.name && errors.name}

            <label htmlFor="email" className='form__label'>Электронная почта</label>
            <input
                type="email"
                name="email"
                placeholder='example@example.com'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className='form__input'
                lang='en'
            />
            {errors.email && touched.email && errors.email}

            <label htmlFor="phone" className='form__label'>Телефон</label>
            <input
                type="phone"
                name="phone"
                placeholder='8999123123'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className='form__input'
            />
            {errors.phone && touched.phone && errors.phone}

            <button className='form__submit' type="submit" disabled={isSubmitting}>
                отправить
            </button>
            </form>
        )}
        </Formik>
        </div>
    )
}

export default FeedbackForm;