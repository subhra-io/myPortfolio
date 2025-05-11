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
  username: "Subhrajeet",
  title: "Holaaa!, I'm Subrajit, You can call me Nikhil!",
  subTitle: emoji(
    "A Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / kotlin / Swift / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/https://drive.google.com/file/d/1eXUjW1msruka9MIt3tHqTYE8Yz-e9EtJ/view?usp=sharing/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SubrajitPandey201/",
  linkedin: "https://www.linkedin.com/in/subrajit-pandey-6a7950201",
  gmail: "subhrajeetpandey2001@gmail.com",
  instagram: "https://www.instagram.com/nikhilll.io?igsh=b2g5bThsOW5tOWlm",
  medium: "https://medium.com/@subhrajeetpandey2001",
  stackoverflow: "https://stackoverflow.com/users/23574326/subhrajeet-pandey",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Software Developer Enthusiastic About Exploring Diverse Tech Stacks",
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      "skillName": "flutter",
      "fontAwesomeClassname": "fas fa-mobile-alt"
    },
    {
      "skillName": "android",
      "fontAwesomeClassname": "fab fa-android"
    },
    {
      "skillName": "kotlin",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "mongodb",
      "fontAwesomeClassname": "fas fa-database"
    },
    {
      "skillName": "kafka",
      "fontAwesomeClassname": "fas fa-stream"
    },
    {
      "skillName": "ios",
      "fontAwesomeClassname": "fab fa-apple"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Biju Pattanaik University of Technology, Rourkela",
      logo: require("./assets/images/Bputlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "May 2019 - April 2023",
      desc: "Gained expertise in software development, data structures, algorithms, and system design. Worked on various projects and internships.",
      descBullets: [
        "Developed multiple software projects using ReactNative, Kotlin, and C/C++",
    "Worked on Android development, backend systems, and cloud computing",
    "Completed internships at UIDAI, ISAN Data System Private Limited & BHEL, Ranipet",
    "Explored AI/ML, networking, and DBMS/RDBMS concepts"
      ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Jharsuguda, Odisha",
      logo: require("./assets/images/Navodaya.png"),
      subHeader: "Intermediate, Science with Mathematics,Secondary School Certificate (SSC)",
      duration: "May 2016 - April 2018",
      desc: "Ranked in the top 10% of the program. Studied subjects including Physics, Chemistry, Mathematics, and Computer Science. Represented the school in a national-level football tournament held in Muzaffarpur, Bihar.",
      descBullets: ["National-level football tournament participant, Muzaffarpur, Bihar",
    "Excelled in subjects like Physics, Chemistry, Mathematics, and Computer Science"
  ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Jharsuguda, Odisha",
      logo: require("./assets/images/Navodaya.png"),
      subHeader: "Higher Secondary Certificate (HSC)- Matriculation",
      duration: "September 2011 - April 2016",
      desc: "Ranked in the top 10% of the program. Built a strong foundation in Mathematics and Science. Represented the school in state-level football tournaments in Odisha (Angul) and Madhya Pradesh (Shivpuri).",
      descBullets: ["State-level football tournament participant, Angul, Odisha & Shivpuri, Madhya Pradesh",
      "Strong foundation in Mathematics and Science"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer 1",
      company: "Unique Indenfication Authority of India, Bangalore",
      companylogo: require("./assets/images/Aadhaar_Preview.png"),
      date: "October 2024 – Ongoing",
      desc: "Working on high-impact projects to enhance Aadhaar-related applications, focusing on Android and cross-platform development.",
      descBullets: [
        "Collaborated with the Android team on projects utilizing MVVM architecture, LiveData, WorkManager, and Coroutines",
    "Developed a cross-platform application using Kotlin Multiplatform (KMP) and Android Jetpack Compose",
    "Integrated backend services such as Redis, Kafka, and load balancers to ensure efficient data handling and real-time processing",
    "Optimized application performance and memory usage for large-scale user interactions"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Unique Indenfication Authority of India",
      companylogo: require("./assets/images/Aadhaar_Preview.png"),
      date: "May 2023 – May 2024",
      desc: "Contributing to the development and optimization of Aadhaar-related applications, focusing on Android and cross-platform solutions.",
      descBullets:[
        "Worked alongside the Android team on projects related to Aadhaar face authentication (faceRD) and universal USB detection",
        "Implemented MVVM architecture, LiveData, WorkManager, Navigation, Shared Preferences, Coroutines, and multi-threading techniques",
        "Developed and optimized Android applications using Android SDK, NDK, CMake, and Android Architecture Components",
        "Worked with Fragments, Custom View components, RecyclerView, and file I/O for efficient data management",
        "Integrated backend services such as Redis, Kafka, and load balancers for real-time data processing",
        "Developed cross-platform applications using Kotlin Multiplatform (KMP) and Android Jetpack Compose"
      ]
    },
    {
      role: "Android Developer Consultant",
      company: "NextLearn Technologies, Bangalore",
      companylogo: require("./assets/images/Nextlearn.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Provided consulting services for Android application development, focusing on scalable architecture and backend integration.",
      descBullets:[
        "Designed the system architecture for an Android application using the MVVM architecture",
    "Assisted in integrating the application with MongoDB, ensuring scalability and efficient database interactions",
    "Provided guidance on best practices for Android development, including performance optimization and memory management",
    "Collaborated with developers to implement robust backend solutions for seamless app functionality"
      ]
    },
    {
      role: "Android Developer Intern",
      company: "ISAN Data Systems Pvt Ltd, Bangalore",
      companylogo: require("./assets/images/ISAN.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Internship",
      company: "Bharat Heavy Electricals Limited, Ranipet, TN",
      companylogo: require("./assets/images/BHEL.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Android Application",
  subtitle: "Some of contibution in App Store and Playstore",
  projects: [
    {
      image: require("./assets/images/Aadhaar_Preview.png"),
      projectName: "FaceRD-Android",
      projectDesc: "Aadhaar Authorized Face Recognition Application",
      footerLink: [
        {
          name: "Get it on Playstore",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Aadhaar_Preview.png"),
      projectName: "FaceRD- IOS",
      projectDesc: "IOS based Face Authentication application Build by Aadhaar",
      footerLink: [
        {
          name: "Get it on AppStore",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/MeriPehchaan.avif"),
      projectName: "Pehchaan - Aadhaar Verifable Credentials",
      projectDesc: "Digital Idenity powered by UIDAI",
      footerLink: [
        {
          name: "To be Uploaded Soon!",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "International Innovation Award 2024",
      subtitle:
        "Contributed to the development of Aadhaar Face Authentication, an AI/ML-poweredsolution by UIDAI, awarded the International Innovation Award 2024(Service and Solution Category) at a global forum in Kuala Lumpur,Malaysia.",
      image: require("./assets/images/Award.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Read More About on Linkedin",
          url: "https://www.linkedin.com/posts/unique-identification-authority-of-india-uidai-_uidai-bags-international-innovation-award-activity-7268272364377772032-tuFM?utm_source=share&utm_medium=member_android&rcm=ACoAADOTVN8BL8upBSrpMOfER4iUqEmP5XEO26Q"
        },
        {
          name: "Blog",
          url: "https://www.linkedin.com/posts/subrajit-pandey-6a7950201_uidai-bags-international-innovation-award-activity-7268631171796742144-KrCJ?utm_source=share&utm_medium=member_android&rcm=ACoAADOTVN8BL8upBSrpMOfER4iUqEmP5XEO26Q"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Listen With Me!🎙️"),
  subtitle: "Suggest me something in your mind, Love to hear !",

  //! TODO add spotify api and Device Signed in in the device of Sportify change according to that music

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/watch?v=AY3Yea6hBbI"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to me! ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9337543151📞",
  email_address: "subhrajeetpandey2001@gmail.com 💌",
  location: "Bengaluru, KA"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  resumeSection,
};
