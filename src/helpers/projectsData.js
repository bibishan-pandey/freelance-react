import {avatarFemale, avatarMale, bivishanProfile, flag} from "../assets";


export const projectsData = [
    {
        image: avatarMale,
        imageAlt: 'Bidhya Sharm',
        userName: '@bidhyansharma',
        name: 'Bidhya Sharma',
        budgetLabel: 'Received Budget: ',
        budget: '2,200',
        projectTitle: 'Project Title',
        projectDescription: 'Project Description',
        skills: [
            {
                variant: 'primary',
                name: 'JavaScript',
            },
            {
                variant: 'success',
                name: 'Python',
            },
            {
                variant: 'danger',
                name: 'ReactJS',
            },
            {
                variant: 'secondary',
                name: 'PostgreSQL',
            },
            {
                variant: 'warning',
                name: 'Django',
            },
            {
                variant: 'info',
                name: 'REST',
            },
        ],
    },
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

export const profileData = {
    image: bivishanProfile,
    imageAlt: 'Bibishan Pandey',
    userName: '@bibishanpandey',
    name: 'Bibishan Pandey',
    designation: 'Software Engineer',
    accountType: 'Freelancer',
    certified: 'Certified Account',
    completedProjects: 342,
    postedProjects: 58,
    flag: flag,
    budget: 5,
    location: 'Kathmandu, Nepal',
    projects: projectsData,
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
};