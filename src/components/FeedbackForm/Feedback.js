import React from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import "./Feedback.css";
import axios from 'axios';

const FeedbackForm = () => {

    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.name}>{label}</label>
                {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
                ) : null}
                <input className="text-input" {...field} {...props} />
            </>
        );
    };

    const MyCheckbox = ({ children, ...props }) => {
        const [field, meta] = useField({ ...props, type: "checkbox" });
        return (
            <>
                <label className="checkbox">
                    {meta.touched && meta.error ? (
                        <div className="error check">{meta.error}</div>
                    ) : null}
                    <input {...field} {...props} type="checkbox" />
                    {children}
                </label>
            </>
        );
    };

    return (
        <div className="FeedbackForm">
            <div className="FeedbackForm__wrap">
            <div className="blue-dot"></div>
            <h3 className="FeedbackForm__header">получить консультацию</h3>
        </div>

    <Formik
        initialValues={{ name: "", email: "", phone: "", acceptedTerms: false }}
        validationSchema={
            Yup.object({
                name: Yup.string()
                    .min(2, "Такого короткого имени не бывает!")
                    .max(20, "Такого длинного имени не бывает!")
                    .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр')
                    .required("Введите имя"),
                email: Yup.string()
                    .email("Неверный адрес электронной почты")
                    .required("Введите адрес электронной почты"),
                phone: Yup.string()
                    .min(11, "Укажите корректный номер телефона")
                    .max(12, "Укажите корректный номер телефона")
                    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        "Укажите корректный номер телефона")
                    .required("Введите номер телефона"),
                acceptedTerms: Yup.boolean()
                    .required('Необходимо принять условия')
                    .oneOf([true], 'Необходимо принять условия'),
            })
        }
        onSubmit={(values, { setSubmitting }) => {
            const TOKEN = '5405372932:AAFZzRX4vOB3owJaY9DPaD6-t-Psh3Mp-Y0';
            const CHAT_ID = '-669642863';
            const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

            let message = `Заявка с сайта`;
            message +=`Имя: ${this.values.name}`;
            message +=`Почта: ${this.values.email}`;
            message +=`Телефон: ${this.values.phone}`;

            axios.post(URI_API, {
                chat_id: CHAT_ID,
                text: message
            });
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
            <form onSubmit={handleSubmit} className="form">
            
            <label htmlFor="name" className="form__label">
                Имя
            </label>
            <MyTextInput
                id='name'
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Введите имя"
                className="form__input"
                lang="ru"
            />
            {errors.name && touched.name}

            <label htmlFor="email" className="form__label">
                Электронная почта
            </label>
            <MyTextInput
                id='email'
                type="email"
                name="email"
                placeholder="example@example.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="form__input"
                lang="en"
            />
            {errors.email && touched.email}

            <label htmlFor="phone" className="form__label">
                Телефон
            </label>
            <MyTextInput
                id='phone'
                type="tel"
                name="phone"
                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                placeholder="+7(___)___-__-__"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className="form__input"
            />
            {errors.phone && touched.phone}

            <MyCheckbox 
                name='acceptedTerms' 
                id='acceptedTerms'
                className='checkbox'
            >
                Я соглашаюсь с условиями как Самоха
            </MyCheckbox>
            
            <button
                className="form__submit"
                type="submit"
                disabled={isSubmitting}
            >
                отправить
            </button>
            </form>
        )}
    </Formik>
    </div>
);
};

export default FeedbackForm;
