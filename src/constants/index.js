export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AI Task Assigner',
    desc: 'AI Task Assigner is a web application that uses AI to assign tasks to users based on their skills and availability by reading the task description and matching it with the user',
    subdesc:
      'By using AI Task Assigner Juniors would flourish with out risking burn out',
    // href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    // texture: '/textures/project/project2.mp4',
    // logo: '/assets/project-logo2.png',
    // logoStyle: {
    //   backgroundColor: '#13202F',
    //   border: '0.2px solid #17293E',
    //   boxShadow: '0px 0px 60px 0px #2F6DB54D',
    // },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Flask',
        path: 'assets/flask.png',
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: '/assets/postgresql.png',
      },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'Pharmacy Sales and Stock Management System',
    desc: 'Pharmacy Sales and Stock Management System is a web application built using flutter that helps pharmacies streamline business operations, manage inventory, and improve customer experience.',
    subdesc:
      'With focus on Efficiency and User Experience.',
    // href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    // texture: '/textures/project/project3.mp4',
    // logo: '/assets/project-logo3.png',
    // logoStyle: {
    //   backgroundColor: '#60f5a1',
    //   background:
    //     'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //   border: '0.2px solid rgba(208, 213, 221, 1)',
    //   boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    // },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.png',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase-1.png',
      },
    ],
  },
  {
    title: 'Freshman Guide - a social media platform for jimma university freshmen',
    desc: 'Freshman Guide is a social media platform for jimma university freshmen that allows them to connect with other freshmen and share their experiences.',
    subdesc:
      'Built with Flutter and Firebase',
    // href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    // texture: '/textures/project/project4.mp4',
    // logo: '/assets/project-logo4.png',
    // logoStyle: {
    //   backgroundColor: '#0E1F38',
    //   border: '0.2px solid #0E2D58',
    //   boxShadow: '0px 0px 60px 0px #2F67B64D',
    // },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.png',
      },
      {
        id: 2,
        name: 'Firebase',
        path: '/assets/firebase-1.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },

    ],
  },
  {
    title: 'SmartHomez - a digital realstate affilation and brokage website',
    desc: 'SmartHomez is a digital realstate affilation and brokage website that allows users to find and buy properties.',
    subdesc:
      'Built with Golang and Vuejs',
    // href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    // texture: '/textures/project/project5.mp4',
    // logo: '/assets/project-logo5.png',
    // logoStyle: {
    //   backgroundColor: '#1C1A43',
    //   border: '0.2px solid #252262',
    //   boxShadow: '0px 0px 60px 0px #635BFF4D',
    // },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Golang',
        path: '/assets/Golang.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 2,
    name: 'Zainx Technologies',
    pos: 'Backend Developer',
    duration: 'Present',
    title: "Building and maintaining backend systems for clients and creating new features",
    icon: '/assets/Laravel.svg',
    animation: 'victory',
  },
  {
    id: 1,
    name: 'TechBridge Software Solutions',
    pos: 'Flutter Developer Intern and UI/UX Designer',
    duration: '2023',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },

];
