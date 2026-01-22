/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sanjana Panda",
  title: "Hi all, I'm Sanjana",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1eCXqnuYuKxuyjgrt1WSv-tzZOwO8tghJqtOrNEAFldc/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sanjanapda75-cpu",
  linkedin: "http://www.linkedin.com/in/sanjana-panda-015a3b397",
  gmail: "sanjana.pda75@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Berhampur University",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2023 - April 2026"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work Experience Section
const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Full Stack Developer (Academic Project)",
      company: "Employee Management System",
      companylogo: require("./assets/images/pythonLogo.png"), 
      date: "Nov 2025 - Present",
      desc: "Designed and built a comprehensive Employee Management System to handle staff records and administrative tasks.",
      descBullets: [
        "Developed the backend logic using Python to ensure secure data processing.",
        "Created an interactive frontend using Vanilla JavaScript, HTML, and CSS.",
        "Implemented CRUD operations (Create, Read, Update, Delete) for effective database management."
      ]
    },
    {
      role: "Frontend Developer (Self-Paced)",
      company: "React Projects Suite",
      companylogo: require("./assets/images/reactLogo.png"), 
      date: "Dec 2025 – Jan 2026",
      desc: "Undertook an intensive development sprint to build 12 distinct React applications in a single repository.",
      descBullets: [
        "Mastered React hooks (useState, useEffect) and component-based architecture.",
        "Structured a monorepo on GitHub to manage multiple mini-projects efficiently.",
        "Focused on responsive design and modern UI/UX principles."
      ]
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON WORTH CHECKING OUT",
  projects: [
    {
      projectName: "EMPLOYEE MANAGEMENT SYSTEM",
      projectDesc: "MANAGE EMPLOYEE RECORDS EFFICIENTLY",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://emplmgmt.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and key milestones in my journey.",

  achievementsCards: [
    // i can uncomment and fill this in later when you get a certificate!
    /*
    {
      title: "BSc Computer Science",
      subtitle: "Completed Bachelor's degree from Berhampur University.",
      image: require("./assets/images/degreeLogo.png"), // You'd need a logo here
      imageAlt: "Degree Certificate",
      footerLink: [
        {
           name: "View Degree",
           url: ""
        }
      ]
    }
    */
  ],
  display: false // Set to false to hide this section until you have certificates
};
// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set to false so it doesn't try to fetch data
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set to false to hide this section
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set to false to hide this section
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set to false to hide this section
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sanjana.pda75@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
