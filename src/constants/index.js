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
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "Twice State level Table-Tennis Winner (2021 and 2022)",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
    },
    {
      title: "Branch Head of Information Technology Department (2021 - 2022)",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015)",
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
      title: "Software Devloper",
      company_name: "Bank of New York Mellon",
      icon: bny,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      link: "",
      points: [
        "Software build is now used internally in the company and by the company’s clients for operating Netx360 and Netx360+.",
        "Resolved more than 50+ Software Composition Analysis (SCA) and vulnerabilities issues.",
        "Adapted Agile methodologies, CI/CD, and Test-Driven Programming to uphold strong programming practices.",
        "Using technologies like Java, SpringBoot, C#, .NET and AngularJS.",
      ],
      link: "https://drive.google.com/drive/folders/13FK-YewFDv8ALmzKglPBmb6Z3oenuYoP",
    },
    {
      title: "Research Intern",
      company_name: "National Security Council Secretriat",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-national-security-agency-crowdfunding-flaticons-lineal-color-flat-icons-2.png",
      iconBg: "#383E56",
      date: "Mar 2022 - Oct 2023",
      link: "",
      points: [
        "Creating a system for secure fine-grained next-generation access control and authorization of digital assets and operations using policy based cryptosystem.",
        "Collaborating with cross-functional technologies like spring boot, react etc. to integrate high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link: "https://github.com/codewithrathi",
    },
    {
      title: "DSA Mentor",
      company_name: "GeeksforGeeks (Intern)",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#E6DEDD",
      date: "May 2022 - Apr 2023",
      link: "",
      points: [
        "Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.",
        "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
      ],
      link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
    },
    {
      title: "Technical Content Writer",
      company_name: "GeeksforGeeks",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
      iconBg: "#383E56",
      date: "Dec 2020 - July 2022",
      link: "",
      points: [
        "Creative and experienced content writer with 2+ years of experience.",
        "Attracted over 10000+ visitors to the company website with powerful educational content.",
        "Wrote 100+ articles and improved 300+ articles on topics like Data Structures, Algorithms, Mathematics and related engineering topics",
      ],
      link: "https://auth.geeksforgeeks.org/user/_shinchancode",
    },
    {
      title: "Google Cloud Training",
      company_name: "Google Cloud",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Apr 2021",
      link: "",
      points: [
        "Introduction to GCP and more functionalities with free access to quests, skill badges.",
        "Collaborating with cross-functional technologies.",
        "Got introduced to Computing, Application Development, Big Data and Machine Learning using Google Cloud's on training platform Qwiklabs",
        "Additional self-paced labs were provided to practice on Qwiklabs a platform by Google",
      ],
      link: "https://www.cloudskillsboost.google/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    },
    {
      title: "Hacktoberfest",
      company_name: "GitHub",
      icon: hf,
      iconBg: "#E6DEDD",
      date: "Oct (2020 - 2022)",
      link: "",
      points: [
        "Hacktoberfest is an annual worldwide event held during the month of October. The event encourages open source developers to contribute to repositories through pull requests (PR).",
        "GitHub hosts many open source repositories that contribute to this event.",
      ],
      link: "https://dev.to/shinchancode",
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
