import * as React from 'react';
import { Field, InjectedFormProps, WrappedFieldProps, reduxForm } from 'redux-form';

export interface FormData {
    name: string;
    email: string;
}

const validate = (values: FormData) => {
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

const warn = (values: FormData) => {
    const warnings = {
        name: ''
    }
    if(values.name && values.name.length > 10) {
        warnings.name = 'May be too long for you to remember'
    }
    return warnings
}

const renderField= (field: WrappedFieldProps & any) => (
    <div>
        <label>{field.label}</label>
        <div>
            <input {...field.input} placeholder = {field.label} type = {field.type} />
            {field.meta.touched && ((field.meta.error && <span>{field.meta.error}</span>) || (field.meta.warning && <span>{field.meta.warning}</span>))}
        </div>
    </div>
)

class FormComponent extends React.Component<InjectedFormProps<FormData, {}, string>, any> {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
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
}

export const Form = reduxForm({
    form: 'test',
    validate,
    warn
})(FormComponent);