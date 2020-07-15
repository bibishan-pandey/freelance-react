import {backgroundImage, iWantToHire_1, iWantToHire_2, iWantToWork_1, iWantToWork_2, iWantToWork_3} from "../assets";
import {browseJobs, postProject, signIn} from "./urls";


export const howItWorksPageData = [
    {
        isOrderFirst: false,
        isImage: true,
        header: 'What kind of work can I get done?',
        subHeaders: ['How does "anything you want" sound? We have experts representing every technical, professional, and creative field.'],
        video: '',
        media: iWantToHire_1,
        mediaAlt: 'I want to hire 1',
        buttons: [{
            url: postProject,
            variant: 'warning',
            text: 'Post a Project',
        }],
        error: '',
    },
    {
        isOrderFirst: true,
        isImage: true,
        header: 'How does it work?',
        subHeaders: ['It\'s always free to post your project. You\'ll automatically begin to receive bids from our freelancers. Alternatively, you can browse through the talent available on our site, and make a direct offer to a freelancer instead.', 'Browse freelancer profiles, Chat in real-time, Compare proposals and select the best one, Award your project and your freelancer goes to work',
            'Pay safely using our Milestone Payment system - release payments according to a schedule of goals you set, or pay only upon completion. You are in control, so you get to make decisions.'],
        video: '',
        media: iWantToHire_2,
        mediaAlt: 'I want to hire 2',
        buttons: [{
            url: postProject,
            variant: 'warning',
            text: 'Post a Project',
        }],
        error: '',
    },
    {
        isOrderFirst: false,
        isImage: true,
        header: 'What kind of work can I do?',
        subHeaders: ['You can find just about any job you can imagine. We have jobs ranging from delivery to website development. You can find a variety of jobs that suit you on Freelancer.com.',
            'Just complete your profile and let us know your skill sets so we can match you to the right jobs'],
        video: '',
        media: iWantToWork_1,
        mediaAlt: 'I want to work 1',
        buttons: [{
            url: browseJobs,
            variant: 'primary',
            text: 'Browse Jobs',
        }],
        error: '',
    },
    {
        isOrderFirst: true,
        isImage: true,
        header: 'How do I get started?',
        subHeaders: ['Select your skills and expertise, Upload a professional profile photo, Go through the Verification Center checklist',
            'We have jobs available for all skills. Maximize your job opportunities by optimizing your filters. Save your search and get alerted when relevant jobs are available.',
            'Put your best foot forward and write the best pitch possible. Read the project and let the clients know you understand their brief. Tell them why you\'re the best person for this job. Writing a new brief for each project is more effective than using the same one!',
            'Get ready to work once you get hired. Deliver high quality work and earn the agreed amount.'],
        video: '',
        media: iWantToWork_2,
        mediaAlt: 'I want to work 2',
        buttons: [{
            url: browseJobs,
            variant: 'primary',
            text: 'Browse Jobs',
        }],
        error: '',
    },
    {
        isOrderFirst: false,
        isImage: true,
        header: 'Safe and Secure.',
        subHeaders: ['Freelancer.com is a community that values your trust and safety as our number one priority:',
            '1. State-of-the-art security for your funds. All transactions are secured with DigiCert 4096-bit SSL encryption.',
            '2. Request for Milestone Payments from your clients to make sure that your hard earned money gets to you safely.',
            '3. Our representatives are available 24/7 to assist you with any issues.'],
        video: '',
        media: iWantToWork_3,
        mediaAlt: 'I want to work 3',
        buttons: [],
        error: '',
    },
];


export const homePageData = [
    {
        isOrderFirst: false,
        isImage: true,
        header: 'Hire expert freelancers for any job, online',
        subHeaders: ['Millions of small businesses use Freelancer to turn their ideas into reality.'],
        video: '',
        media: backgroundImage,
        mediaAlt: 'Background Image',
        buttons: [
            {
                url: signIn,
                variant: 'warning',
                text: 'I want to Hire'
            },
            {
                url: signIn,
                variant: 'info',
                text: 'I want to Work'
            }
        ],
        error: '',
    },
    {
        isOrderFirst: false,
        isImage: false,
        header: 'Need work done?',
        subHeaders: ['It\'s easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.', 'Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more).', 'With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online.'],
        video: 'https://www.f-cdn.com/assets/video/homepage/homepage-de21e73d.mp4',
        media: 'https://www.f-cdn.com/assets/img/homepage/homepage-cf6581d5.png',
        mediaAlt: 'how to get work done on freelancer!',
        buttons: [],
        error: 'Your browser does not support the video tag.',
    }
];