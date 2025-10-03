const Resume: Resume = {
  header: {
    name: "Rohan Banerjee",
    title: "Frontend Wizard | React.js | CSS Sorcery | Bug Summoner",
    mail: "rohan.banerjee@example.com",
    phone: "+91 1234567890",
    location: {
      url: "https://maps.example.com/faketown",
      label: "404 Not Found Street, Faketown, India",
    },
    links: [
      {
        url: "https://www.linkedin.com/in/rohan-banerjee-lol/",
        label: "linkedin.com/in/rohan-banerjee-lol",
      },
      {
        url: "https://github.com/rohan-funnydev",
        label: "github.com/rohan-funnydev",
      },
    ],
  },
  summary:
    "I’m Rohan, a frontend engineer who believes CSS bugs are just misunderstood features. I craft pixel-perfect UIs (unless pixels decide to rebel). When I’m not coding, I’m probably debugging why my toaster isn’t WiFi-enabled yet. I love hackathons, coffee, and pretending console.log is a legit debugging tool.",
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "Institute of Imaginary Engineering",
      startDate: "2022",
      endDate: "2026",
      major: "Computer Science and Bad Jokes",
      location: "Faketown, India",
      details: [
        "Relevant Coursework: Data Structures, Algorithms, ‘How to Google Errors 101’",
        "Activities: Member of Debugging Society, Winner of Ctrl+C Ctrl+V coding challenge",
      ],
    },
  ],
  skills: [
    "Languages: JavaScript, TypeScript, Java, Python, Klingon (basic)",
    "Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3, Dark Mode Enthusiast",
    "Backend Basics: Node.js, Express.js, REST APIs (tested only on localhost)",
    "Tools & Cloud: GitHub, VS Code, Stack Overflow, Postman (the app, not the guy)",
    "Interests: Frontend development, making divs center without crying",
  ],
  projects: [
    {
      title: "FoodieFy - The Hungry Developer’s Companion",
      description:
        "A food delivery app for developers that only delivers snacks between 12AM–3AM.",
      techStack: "React Native, Firebase, Tailwind CSS",
      points: [
        "Created a dark mode by default because devs fear the light.",
        "Integrated a ‘Coffee Emergency’ button with one-click ordering.",
        "Optimized loading time to be faster than my instant noodles.",
      ],
      ongoing: false,
      links: [
        { url: "https://foodiefy.example.com", label: "FoodieFy" },
        {
          url: "https://github.com/rohan-funnydev/foodiefy",
          label: "github.com/rohan-funnydev/foodiefy",
        },
      ],
    },
    {
      title: "MemeHub - Social Media for Memes",
      techStack: "Next.js, MongoDB, Cloudinary",
      points: [
        "Built infinite scroll for memes (because memes never end).",
        "Added upvote system to start digital wars.",
        "Introduced AI that recommends memes based on how tired you look.",
      ],
      ongoing: false,
    },
    {
      title: "BugTracker++",
      techStack: "React.js, Express.js, MySQL",
      points: [
        "Developed a system to track bugs (most of which I created myself).",
        "Added feature to assign bugs to ‘future me’.",
        "UI includes motivational quotes like ‘It worked on my machine’.",
      ],
      ongoing: true,
    },
  ],
  workExperience: [
    {
      jobTitle: "Frontend Wizard",
      company: "Pixel Pals Inc.",
      location: "Faketown, India",
      description: "A startup dedicated to making buttons more clickable.",
      startDate: "2024",
      endDate: "Present",
      responsibilities: [
        "Summoned CSS animations that impressed clients and confused coworkers.",
        "Reduced app load time by sacrificing a goat (metaphorically).",
        "Helped design buttons so shiny users click them just for fun.",
      ],
    },
    {
      jobTitle: "Hackathon Survivor",
      company: "CodeFest 3000",
      location: "Somewhere in India",
      startDate: "2023",
      endDate: "2024",
      responsibilities: [
        "Stayed awake for 36 hours straight powered only by caffeine and despair.",
        "Shipped a project that somehow worked… on the last try.",
      ],
    },
    {
      jobTitle: "Intern (Coffee Specialist)",
      company: "BuggySoft Solutions",
      location: "Nowhere City, India",
      startDate: "2022",
      endDate: "2023",
      responsibilities: [
        "Learned that Stack Overflow is faster than any mentor.",
        "Improved team productivity by perfecting coffee brewing skills.",
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
