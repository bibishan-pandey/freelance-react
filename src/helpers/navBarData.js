import {navBarLogo} from "../assets";
import {
    browseProjects,
    dashboard, freelancers,
    howItWorks,
    messages,
    postProject,
    profile,
    signIn,
    signOut,
    signUp
} from "./urls";

export const loggedOutNavBar = {
    variant: 'white',
    logo: navBarLogo,
    logoAlt: 'Freelance Nepal Logo',
    position: 'ml-auto',
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
};

export const loggedInNavBar = {
    variant: 'white',
    logo: navBarLogo,
    logoAlt: 'Freelance Nepal Logo',
    position: 'ml-auto',
    urls: [
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
};

export const secondaryNavBar = {
    variant: 'warning',
    logo: '',
    logoAlt: '',
    position: 'mr-auto',
    urls: [
        {
            path: postProject,
            name: 'Post a Project',
            style: 'btn btn-info shadow-lg rounded',
            icon: 'envelope-open-o',
        },
        {
            path: dashboard,
            name: 'Dashboard',
            style: 'nav-link',
            icon: 'home',
        },
        {
            path: profile,
            name: 'Profile',
            style: 'nav-link',
            icon: 'user-circle',
        },
        {
            path: freelancers,
            name: 'Find Freelancers',
            style: 'nav-link',
            icon: 'search',
        },
    ],
};