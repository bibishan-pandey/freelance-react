import {navBarLogo} from "../assets";
import {browseProjects, dashboard, howItWorks, messages, signIn, signOut, signUp} from "./urls";

export const loggedOutNavBar = {
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

export const loggedInNavBar = {
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
            path: browseProjects,
            name: 'Browse Projects',
            style: 'nav-link',
            icon: 'bar-chart',
        },
        {
            path: messages,
            name: 'Messages',
            style: 'nav-link',
            icon: 'comments-o',
        },
        {
            path: signOut,
            name: 'Sign Out',
            style: 'btn btn-danger',
            icon: 'sign-out',
        },
    ],
}