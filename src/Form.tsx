import * as React from 'react';
import { TextField } from 'material-ui';
import { Button } from '@material-ui/core';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { validate } from './validate'
import { FormData } from './FormData'

const renderField= (field: any) => (
    <TextField
        hintText = {field.label}
        floatingLabelText = {field.label}
        errorText = {field.meta.touched && field.meta.error}
        warnText = {field.meta.touched && field.meta.warn}
        {...field.input}
        {...field.custom}
    />
)

class FormComponent extends React.Component<InjectedFormProps<FormData, {}, string>, any> {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return(
            <form onSubmit = {handleSubmit}>
                <div>
                    <Field name = "name" component = {renderField} label = "Name" />
                </div>
                <div>
                    <Field name = "email" component = {renderField} label = "Email" />
                </div>
                <div>
                    <Button type = "submit" disabled = {submitting}>Submit</Button>
                    <Button type = "button" disabled = {pristine || submitting} onClick = {reset}>Clear Values</Button>
                </div>
            </form>
        )
    }
}

export const Form = reduxForm({
    form: 'test',
    validate
})(FormComponent);