/* eslint-disable react/prop-types */
import { Formik, Form as FormikForm, } from 'formik'
  
export default function Form ({ initialValues, validationSchema, handelSubmit,  children }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                handelSubmit(values, actions)
            }}
        >
            <FormikForm style={{ width: '100%' }}>
                {children}
            </FormikForm>
        </Formik>
    )
}