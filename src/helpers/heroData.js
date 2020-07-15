import {backgroundImage} from "../assets";
import {signIn} from "./urls";

export const homePageImageHeroData = {
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
};

export const homePageVideoHeroData = {
    header: 'Need work done?',
    subHeaders: ['It\'s easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.', 'Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more).', 'With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online.'],
    video: 'https://www.f-cdn.com/assets/video/homepage/homepage-de21e73d.mp4',
    media: 'https://www.f-cdn.com/assets/img/homepage/homepage-cf6581d5.png',
    mediaAlt: 'how to get work done on freelancer!',
    buttons: [],
    error: 'Your browser does not support the video tag.',
};