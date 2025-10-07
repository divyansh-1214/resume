// resume.tsx

const Resume: Resume = {
  header: {
    name: "Divyansh Srivastava",
    title: "Full Stack Developer | MERN Stack",
    mail: "divyansh.sri23@gmail.com",
    phone: "8299385926",
    location: {
      url: "https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh,+India",
      label: "Lucknow, Uttar Pradesh, India",
    },
    links: [
      {
        url: "https://www.linkedin.com/in/divyansh-srivastava-687b65292/",
        label: "linkedin.com/in/divyansh-srivastava-687b65292/",
      },
      {
        url: "https://github.com/divyansh-1214",
        label: "github.com/divyansh-1214",
      },
    ],
  },
  summary:
    "I specialise in building responsive and optimised front-end applications using React.js and Next.js. With a strong foundation in JavaScript and modern UI libraries, I translate business requirements into scalable web solutions. My recent projects involved integrating RESTful APIs, enhancing performance, and delivering seamless user experiences across devices. I secured 1st position in Code Charades 3.0, organised by GeeksforGeeks SRMCEM, showcasing my creative problem-solving and technical skills in high-impact environments.",
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "APJ Abdul Kalam Technical University",
      startDate: "2023",
      endDate: "2027",
      major: "Information Technology",
      location: "Lucknow, Uttar Pradesh, India",
    },
  ],
  skills: [
    "Languages: Java, TypeScript, JavaScript, Python, C",
    "Front-end: HTML, CSS, React.js, Next.js, Tailwind CSS",
    "Back-end: Node.js, Express.js, RESTful APIs, JWT, Django, Django REST Framework",
    "DevOps & Cloud: GitHub Actions, AWS EC2",
    "Tools: Postman, Figma, Three.js, Framer Motion",
    "Interests: Web Development, Mobile Applications, Artificial Intelligence, Machine Learning, Open-Source Contributions",
  ],
  projects: [
    {
      title: "AI-Based Health Assistant",
      techStack: "Next.js, TypeScript, TensorFlow, LangChain",
      points: [
        "Developed a healthcare web application designed to assist users with medical services through an AI-powered interface.",
        "Integrated an intelligent chatbot to support users with health queries, doctor appointments, and medical guidance.",
        "Implemented features such as doctor booking, medical record display, and seamless navigation for an enhanced user experience.",
      ],
      ongoing: false,
    },
    {
      title: "Viraje-Sarthi",
      techStack: "Next.js, TypeScript, REST API",
      points: [
        "Developed a platform that connects individuals with verified construction service providers including masons, labourers, and contractors.",
        "Simplified service discovery by offering verified worker profiles, ensuring trust and reliability.",
        "Built a user-friendly front-end and structured back-end to support smooth interaction between users and workers.",
      ],
      ongoing: false,
    },
    {
      title: "NEOM E-Commerce Platform",
      techStack: "Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js",
      points: [
        "Developed and styled responsive UI components for core e-commerce features such as product listings and checkout.",
        "Created pixel-perfect user interfaces based on Figma guidelines using Next.js and Tailwind CSS.",
        "Integrated RESTful APIs for product and user management, enabling dynamic content loading.",
      ],
      ongoing: false,
    },
    {
      title: "E-commerce Platform",
      techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js), JWT, AWS EC2",
      points: [
        "Developed a full-featured e-commerce platform with user authentication, product management, and order processing.",
        "Implemented secure JWT-based authentication and role-based access control for enhanced security.",
        "Deployed the application on AWS EC2 with automated CI/CD pipelines using GitHub Actions.",
      ],
      ongoing: false,
    },
  ],
  workExperience: [
    {
      jobTitle: "Software Developer Intern",
      company: "VIVAX",
      location: "Lucknow, Uttar Pradesh, India",
      startDate: "01/2025",
      endDate: "02/2025",
      responsibilities: [
        "Gained hands-on experience in production-level front-end development, learning real-world workflows and best practices.",
        "Developed and optimised responsive UI components using Next.js, ensuring cross-device compatibility and performance.",
      ],
    },
    {
      jobTitle: "Technical Lead",
      company: "Zerosarena",
      location: "Lucknow, Uttar Pradesh, India",
      startDate: "2025",
      endDate: "Present",
      responsibilities: [
        "Built a fully responsive, user-friendly interface using React.js and Tailwind CSS, optimised for desktop and mobile platforms.",
        "Collaborated with the core organising team to align technical infrastructure with event objectives, ensuring scalability and timely delivery.",
      ],
    },
    {
      jobTitle: "Junior Front-End Developer",
      company: "Kandid",
      location: "Lucknow, Uttar Pradesh, India",
      startDate: "08/2025",
      endDate: "Present",
      responsibilities: [
        "Implemented pixel-perfect UIs aligned with Figma prototypes, ensuring consistency in design and usability.",
        "Translated wireframes and mock-ups into fully functional, responsive web pages with optimised performance.",
      ],
    },
  ],
};

interface Resume {
  header: {
    name: string;
    title: string;
    mail: string;
    phone: string;
    location: {
      url: string;
      label: string;
    };
    links: {
      url: string;
      label: string;
    }[];
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    major?: string;
    location: string;
    details?: string[];
  }[];
  skills: string[];
  projects: {
    title: string;
    description?: string;
    techStack: string;
    points: string[];
    ongoing: boolean;
    links?: {
      url: string;
      label: string;
    }[];
  }[];
  workExperience: {
    jobTitle: string;
    company: string;
    location: string;
    description?: string;
    startDate: string;
    endDate: string;
    responsibilities?: string[];
    link?: string;
  }[];
}

export default Resume;
