import { FormData } from './FormData'

export function validate(values: FormData) {
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
    return errors;
}