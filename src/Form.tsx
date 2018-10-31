import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values: any) => {
    const errors = {
        name: '',
        email: ''
    }
    if(!values.name) {
        errors.name = 'Required'
    } else if(values.name.length > 15) {
        errors.name = 'Must be 15 charactors or less'
    }
    if(!values.email) {
        errors.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const warn = (values: any) => {
    const warnings = {
        name: ''
    }
    if(values.name && values.name.length > 10) {
        warnings.name = 'May be too long for you to remember'
    }
    return warnings
}

const renderField = (field: any) => (
    <div>
        <label>{field.label}</label>
        <div>
            <input {...field.input} placeholder = {field.label} type = {field.type} />
            {field.meta.touched && ((field.meta.error && <span>{field.meta.error}</span>) || (field.meta.warning && <span>{field.meta.warning}</span>))}
        </div>
    </div>
)

const Form = (props: any) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <Field name = "name" component = {renderField} type = "text" label = "Name" />
                <Field name = "email" component = {renderField} type = "email" label = "Email" />
            </div>
            <div>
                <button type = "submit" disabled = {submitting}>Submit</button>
                <button type = "button" disabled = {pristine || submitting} onClick = {reset}>Clear Values</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'test',
    validate,
    warn
})(Form);