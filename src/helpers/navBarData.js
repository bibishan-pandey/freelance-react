import {navBarLogo} from "../assets";
import {dashboard, howItWorks, signIn, signUp} from "./urls";

export const primaryNavBar = {
    variant: 'white',
    logo: navBarLogo,
    logoAlt: 'Freelance Nepal Logo',
    urls: [
        {
            path: howItWorks,
            name: 'How it works?',
            style: 'nav-link',
            icon: 'globe',
        },
        {
            path: signIn,
            name: 'Sign In',
            style: 'nav-link',
            icon: 'sign-in',
        },
        {
            path: signUp,
            name: 'Sign Up',
            style: 'nav-link',
            icon: 'plus-square-o',
        },
        {
            path: dashboard,
            name: 'Dashboard',
            style: 'btn btn-outline-warning',
            icon: 'th',
        },
    ],
}