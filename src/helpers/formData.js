import {signIn, signUp} from "./urls";

export const signInFormData = {
    headerVariant: 'primary',
    header: 'Welcome Back!',
    inputs: [
        {
            controlId: 'emailValidation',
            label: 'Email Address',
            type: 'email',
            placeholder: 'e.g. johndoe@gmail.com',
            name: 'email'
        },
        {
            controlId: 'passwordValidation',
            label: 'Password',
            type: 'password',
            placeholder: 'e.g. p@ssw0rd#1234',
            name: 'password'
        },
    ],
    buttonVariant: 'primary',
    buttonText: 'Sign In',
    url: {
        label: 'Not registered yet? Go to',
        path: signUp,
        link: 'Sign Up',
    }
}

export const signUpFormData = {
    headerVariant: 'success',
    header: 'Hey There!',
    inputs: [
        {
            controlId: 'usernameValidation',
            label: 'Username',
            type: 'text',
            placeholder: 'e.g. johndoe',
            name: 'userName'
        },
        {
            controlId: 'firstNameValidation',
            label: 'First Name',
            type: 'text',
            placeholder: 'e.g. John',
            name: 'firstName'
        },
        {
            controlId: 'lastNameValidation',
            label: 'Last Name',
            type: 'text',
            placeholder: 'e.g. Doe',
            name: 'lastName'
        },
        {
            controlId: 'emailValidation',
            label: 'Email Address',
            type: 'email',
            placeholder: 'e.g. johndoe@gmail.com',
            name: 'email'
        },
        {
            controlId: 'passwordValidation',
            label: 'Password',
            type: 'password',
            placeholder: 'e.g. p@ssw0rd#1234',
            name: 'password'
        },
    ],
    buttonVariant: 'success',
    buttonText: 'Sign Up',
    url: {
        label: 'Already registered? Go to',
        path: signIn,
        link: 'Sign In',
    }
}