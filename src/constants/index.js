import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.hackerrank.com/_shinchancode",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/shinchancode",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@shinchancode#badges",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "1st Position : Nightsprint Hackathon: Emerged as the top performer in a highly competitive hackathon, surpassing 25 other teams.",
    },
    {
      title: "10th Position: Prasunet Hackathon: Ranked in the top 10 out of over 3400 registered participants in web development branch.",
    },
    {
      title: "1st Position : SAASC LEAGUE WINNER: Secured first place in a multidisciplinary competition involving quizzing, debating, and public speaking, outpacing 10 teams from across the college.",
    },
    {
      title: "Participated in : PEC MUN '23Represented a country in a Model United Nations event with over 100 registered participants, contributing to debates and drafting resolutions on global issues.",
    },
    
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    {
      name:"C++ tool",
      icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "ml",
      title: "ML",
    },
    {
      id: "blockchain",
      title: "Blockchain",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "Green",
      description:
        "Green is a web application designed to increase sustainable awareness and activities among college students. It provides a platform where users can engage in eco-friendly challenges, participate in relevant college events,",
      tags: [
        {
          name: "sustainability",
          color: "blue-text-gradient",
        },
        {
          name: "green",
          color: "green-text-gradient",
        },
        {
          name: "mern",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://final-green-app.vercel.app/",
      source_code_link: "https://github.com/lakshyeahh/Final-Green",
    },
    {
      name: "Anumati Portal",
      description:
        "The Anumati Portal is a web-based application designed to streamline the process of seeking permission from college authorities for organizing events by societies or clubs",
      tags: [
        {
          name: "event",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "mern",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://medium.com/@verma.lakshya071/revolutionizing-event-management-with-anumati-portal-d6c337efbfd3",
      source_code_link: "https://github.com/lakshyeahh/EventOps",
    },
    {
      name: "Medical Appointerment Helper",
      description:
        "Our primary objective is to simplify the appointment booking process, empowering users to effortlessly schedule their medical consultations.",
      tags: [
        {
          name: "medical",
          color: "blue-text-gradient",
        },
        {
          name: "appointment",
          color: "green-text-gradient",
        },
        {
          name: "mern",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/ideathon-2023/team-9n",
      source_code_link: "https://github.com/ideathon-2023/team-9n",
    },
    {
      name: "Jitter - Game",
      description:
        "Built an entire frontend web app to serve as a jitter game, where users had to jitter the button as many times as possible to win.",
      tags: [
        {
          name: "jitter",
          color: "blue-text-gradient",
        },
        {
          name: "game",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/shinchancode/byte-array-to-file",
      source_code_link: "https://github.com/shinchancode/byte-array-to-file",
    },
    {
      name: "3D React Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
      ],
      image: port_3d,
      source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
    },
  ];
  
  export const cProject = [
    {
      name: "Article Mangement Sytem",
      description:
        "Built a smart contract in solidity where users can use their Etherium based Klaytn Tokens to read, write and update articles.",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Klaytn",
          color: "green-text-gradient",
        },
        {
          name: "blockchain",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/shinchancode/Trie-Data-structure",
      source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
    },
   
    
  ];
  
  export const webProject = [
    
    {
      name: "Austism Detection Model with Simon's Game",
      description:
        "This project aims to develop a model for autism detection using a modified version of Simon's Game to assess specific parameters related to Sensory Perception, Attention to Detail, and Multitasking Abilities. ",
      tags: [
        {
          name: "svm",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: react1,
      source_link: "https://github.com/lakshyeahh/Autism-Detection",
      source_code_link: "https://github.com/lakshyeahh/Autism-Detection",
    },
    
  ];
  
  export const otherProject = [
 
  ];
  
  const experiences = [
    {
      title: "Software Devloper Trainee",
      company_name: "Forage",
      icon: bny,
      iconBg: "#0BD8B6",
      date: "July 2024 - July 2024",

      points: [
        "Completed a self-paced program, gained hands-on experience in financial data analysis and coding skills in React,",
         "and JavaScript; contributed to an open-source project, and improved technical contribution skills."
      ],
      
    },
    {
      title: "Introduction to Embedded Systems Software and Development Environments",
      company_name: "University of Colorado Boulder",
      icon: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&dpr=1&w=56px&h=56px&auto=format%2Ccompress&dpr=2",
      iconBg: "#E6DEDD",
      date: "June 2024 - Aug 2024",
      link: "",
      points: [
        "Completed a hands-on course in Embedded Systems Software, focusing on ARM-based microcontrollers, software configuration management, and build system development using GNU Toolchain GCC and Git."
      ],
      link: "https://www.cloudskillsboost.google/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    },
    {
      title: "Website Team Lead",
      company_name: "E-Summit '24",
      icon: "https://www.citywoofer.com/blog/wp-content/uploads/2023/04/esummit-283x400.jpg",
      iconBg: "#6E56CF",
      date: "Feb 2024 - Mar 2024",
      link: "",
      points: [
        
        "Led a team of 7 in the development of a live JavaScript website for the EIC's flagship inter-college event, delivering a comprehensive digital ",
        "catalogue that significantly enhanced participant engagement and user experience."
      ],
      link: "https://github.com/codewithrathi",
    },
    {
      title: "Executive Membeer",
      company_name: "ACM CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png",
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      link: "",
      points: [
        "Manage students and coordinate their involvement in the Society where more than 800 students are enrolled.",

      ],
      link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
    },
    {
      title: "Active Membere Cyber Security Mission 3.0",
      company_name: "Chandigarh Police",
      icon: "https://static.theprint.in/wp-content/uploads/2023/02/ANI-20230214005215.jpg",
      iconBg: "rgba(255, 255, 255, 255)",
      date: "Nov 2022 - July 2024",
      link: "",
      points: [
        "Advocate awareness on cyber threats, preventive measures, and hon mass interaction skills through regular drives in Tricity.",
        
      ],
      link: "https://auth.geeksforgeeks.org/user/_shinchancode",
    },
   
   
  ];
  
  const educations = [
    {
      degree: "Bachelor of Technology",
      branch:
        "Computer Science",
      marks:
        "CGPA : 8.9 / 10",
      name: "Punjab Engineering College, Chandigarh",
      year: "(2022 - 2026)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      marks:
        "Percentage : 95.8 %",
      name: "Bal Niketan School, Chandigarh",
      year: "2022",
      image: school,
    },
    {
      degree:
        "10th Grade",
      branch: "CBSE",
      marks:
        "Percentage : 93.4 %",
      name: "Stepping Stones School, Chandigarh",
      year: "2020",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
