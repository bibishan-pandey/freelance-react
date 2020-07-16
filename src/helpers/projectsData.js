import {avatarFemale, avatarMale} from "../assets";

export const projectsData = [
    {
        image: avatarFemale,
        imageAlt: 'Bhumika Koirala',
        userName: '@bhumikakoirala',
        name: 'Bhumika Koirala',
        budgetLabel: 'Received Budget: ',
        budget: '1,000',
        projectTitle: 'Project Title',
        projectDescription: 'Project Description',
        skills: [
            {
                variant: 'primary',
                name: 'JavaScript',
            },
            {
                variant: 'success',
                name: 'NodeJS',
            },
            {
                variant: 'danger',
                name: 'Ruby',
            },
            {
                variant: 'secondary',
                name: 'Python',
            },
            {
                variant: 'warning',
                name: 'PHP',
            },
            {
                variant: 'info',
                name: 'Android',
            },
        ],
    },
    {
        image: avatarMale,
        imageAlt: 'Bibishan Pandey',
        userName: '@bibishanpandey',
        name: 'Bibishan Pandey',
        budgetLabel: 'Received Budget: ',
        budget: '1,200',
        projectTitle: 'Project Title',
        projectDescription: 'Project Description',
        skills: [
            {
                variant: 'primary',
                name: 'JavaScript',
            },
            {
                variant: 'success',
                name: 'NodeJS',
            },
            {
                variant: 'danger',
                name: 'ReactJS',
            },
            {
                variant: 'secondary',
                name: 'MongoDB',
            },
            {
                variant: 'warning',
                name: 'Express',
            },
            {
                variant: 'info',
                name: 'GraphQL',
            },
        ],
    }
];