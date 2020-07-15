import {signUp} from "./urls";

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