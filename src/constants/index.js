import web from '../assets/expirence.png';
import backend from '../assets/backend.png'
import mobile from '../assets/mobile.png'
import creator from '../assets/creator.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import javascript from '../assets/tech/javascript.png';
import html from '../assets/tech/html.png';
import css from '../assets/tech/css.png';
import git from '../assets/tech/git.png';
import reactjs from '../assets/tech/reactjs.png';
import redux from '../assets/tech/redux.png';
import tailwind from '../assets/tech/tailwind.png';
import typeScript from '../assets/tech/typeScript.png';
import threejs from '../assets/tech/threejs.svg';
import nodejs from '../assets/tech/nodejs.png';
 

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind Css',
    icon: tailwind,
  },
  
  {
    name: 'TypeScripr',
    icon: typeScript,
  },
  {
    name: 'Three Js',
    icon: threejs,
  },
  {
    name: 'Node Js',
    icon: nodejs,
  },
  {
    name: 'Email Js',
    icon: nodejs,
  },
  
  {
    name: 'git',
    icon: git,
  },
 
];


export const services = [
    {
      title: "HTML5",
      icon: web,
    },
    {
      title: "CSS3",
      icon: backend,
    },
    {
     title: "JavaScript",
     icon: mobile,
   },
    {
      title: "React Js",
      icon: creator,
    },
    {
      title: "Redux",
      icon: creator,
    },
    {
      title: "TypeScripr",
      icon: creator,
    },
    {
      title: "EmailJs",
      icon: creator,
    },
    {
      title: "Router",
      icon: creator,
    },
    {
      title: "Axios",
      icon: creator,
    },
  ];

 export const projects = [
    {
      title: "Locator, Location, Directory Manager",
      image: project3,
      live: "",
      source: "/",
      name: "Portfolio Landing Page",
      description:
        "A comprehensive landing page for developers to showcase their skills that allows users to view projects, learn about the author, explore their experience, and contact the author for hiring.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Github",
          color: "orange-text-gradient",
        },
      ],
    },
    // {
    //   title: "Leader Board",
    //   image: project4,
    //   live: "https://soesandarwin2201.github.io/LeaderBoard-project/",
    //   source: "https://github.com/soesandarwin2201/LeaderBoard-project",
    //   description:
    //     "Leaderboard is an app for game users to keep track of their team score and their own score. Users can add their name and score.",
    //   tags: [
    //     {
    //       name: "javascript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "group project",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    // },
]
export const experiences = [
  {
    title: "Assosiate Programmer",
    company_name: "Dotsquares Technology",
    icon:web,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Meeting with the development team to discuss user interface ideas and applications.",
      "Developing and implementing highly responsive user interface components using react concepts.",
      "Monitoring and improving front-end performance. Troubleshooting interface software and debugging application codes.",
      "Writing application interface codes using JavaScript and typeScript following  react js workflows",
    ],
  },
];

export const techs = ["HTML5", "CSS3" , "React", "Rails", "Ruby", "JavaScript", "SQL" ,"PostgreSQL", "jQuery", "Next.js", "UI", "UX", "Graphic", "Content", "Remote", "GitHub", "Git"]