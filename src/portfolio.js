/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arav Chopra's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Arav Chopra Portfolio",
    type: "website",
    url: "http://aravchopra.com/",
  },
};

//Home Page
const greeting = {
  title: "Arav Chopra",
  logo_name: "Arav Chopra",
  nickname: "AI & ML Engineer",
  subTitle:
    "AI/ML Developer | Problem Solver | Building scalable tech solutions",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/aravchopra/masterPortfolio",
  githubProfile: "https://github.com/arav-chopra25",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/aravchopra",
  // linkedin: "https://www.linkedin.com/in/aravchopra/",
  // gmail: "aravchopra98@gmail.com",
  // gitlab: "https://gitlab.com/aravchopra98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/aravchopra",
  // instagram: "https://www.instagram.com/aravchopra/"

  {
    name: "Github",
    link: "https://github.com/arav-chopra25",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arav-chopra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/aravchopra/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/aravchopra",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/aravchopra",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/aravchopra",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@aravchopra",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Delhi Public School",
      subtitle: "Schooling (Class I - XII)",
      logo_path: "1603779333707_dps_school_logo.png",
      alt_name: "Delhi Public School",
      duration: "2011 - 2025",
      descriptions: [
        "⚡ Completed schooling from primary classes through senior secondary.",
        "⚡ Built strong foundations in Mathematics, Science and Computer fundamentals.",
        "⚡ Actively participated in academics and co-curricular activities.",
      ],
      website_link: "https://www.dpsfamily.org/",
    },
    {
      title: "VIT Vellore",
      subtitle: "B.Tech. in CSE (AI & ML)",
      logo_path: "Vellore_Institute_of_Technology_seal_2017.svg.png",
      alt_name: "Vellore Institute of Technology",
      duration: "2025 - 2029",
      descriptions: [
        "⚡ Currently pursuing B.Tech. in Computer Science and Engineering with specialization in AI and ML.",
        "⚡ Focusing on core CSE subjects including Data Structures, Algorithms, and Software Engineering.",
        "⚡ Building projects and practical skills in Artificial Intelligence and Machine Learning.",
      ],
      website_link: "https://vit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "English Communication Program",
      subtitle: "- Unacademy",
      logo_path: "Unacademy-Symbol.png",
      certificate_link:
        "/certificates/English-Communication-Certificate-Actual.pdf",
      alt_name: "Unacademy",
      color_code: "#FFFFFF",
    },
    {
      title: "Certificate of Participation - DevJams",
      subtitle: "- graVITas'25, VIT Vellore",
      logo_path: "GDSC_Logo_White_Background_0.png",
      certificate_link: "/certificates/DevJams-Certificate.pdf",
      alt_name: "GDSC VIT Vellore",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "AI/ML Virtual Internship",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "May 2025 - Jun 2025",
          location: "Online",
          description:
            "Completed a structured virtual internship focused on foundational machine learning workflows, including data preprocessing, model training, evaluation metrics and deployment basics. Built guided capstone tasks and submitted project reports aligned with industry practices.",
          color: "#4285F4",
        },
        {
          title: "Google Summer of Code Contributor",
          company: "Google Summer of Code",
          company_url: "https://summerofcode.withgoogle.com/",
          logo_path: "google_logo.png",
          duration: "May 2026 - Aug 2026",
          location: "Remote",
          description:
            "Contributed to an open-source organization under mentorship, implementing features, resolving issues, and improving technical documentation. Collaborated through code reviews and delivered production-ready pull requests during the program timeline.",
          color: "#4285F4",
        },
        {
          title: "Open Source Contributor",
          company: "GitHub (Multiple Repositories)",
          company_url: "https://github.com/arav-chopra25",
          logo_path: "github_logo.png",
          duration: "Jan 2026 - Present",
          location: "Remote",
          description:
            "Actively contributing bug fixes, enhancements, and documentation improvements across community repositories, with consistent merged pull requests and collaboration with maintainers.",
          color: "#181717",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "GDSC Volunteer",
          company: "Google Developer Student Clubs, VIT Vellore",
          company_url: "https://developers.google.com/community/gdsc",
          logo_path: "dsc_logo.png",
          duration: "Aug 2025 - Present",
          location: "Vellore, Tamil Nadu",
          description:
            "Organizing technical workshops, supporting AI/ML learning initiatives, and helping execute hackathons and peer-learning events on campus.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Learn Student Ambassador",
          company: "Microsoft Learn Student Ambassadors",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Jan 2026 - Present",
          location: "Remote / VIT Vellore",
          description:
            "Leading beginner-friendly sessions on cloud, GitHub, and AI tooling, while mentoring peers and creating practical learning resources for student communities.",
          color: "#D83B01",
        },
        {
          title: "Open Source Community Volunteer",
          company: "GitHub Open Source",
          company_url: "https://github.com/arav-chopra25",
          logo_path: "github_logo.png",
          duration: "Jan 2026 - Present",
          location: "Remote",
          description:
            "Volunteering through documentation improvements, issue triage, beginner PR reviews, and community support across open-source repositories.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.aravchopra.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "VIT Vellore, Katpadi, Vellore, Tamil Nadu 632014",
    locality: "Vellore",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "632014",
    streetAddress: "VIT Vellore",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=VIT+Vellore",
  },
  phoneSection: {
    title: "Email",
    subtitle: "arav.chopra2025@vitstudent.ac.in",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
