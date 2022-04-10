/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "berberidis",
  logo_name: "berberidis.v()",
  // nickname: "harry / picleric",
  full_name: "Vasilis Berberidis",
  subTitle:
    // "Full Stack Developer, Machine Learning Practitioner, Open Source Enthusiast, Life Long Learner.",
    "Software Engineer, my Goal is to make the difference and express my passion for development/ learning / innovating the most effective way I can.",
  resumeLink:
    "https://drive.google.com/file/d/1wrkG62HyDgbUOjNxexCT891tcqd83_cK/view?usp=sharing",
  mail: "mailto:im.vedanshvijay2002@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/dahakashow/",
  linkedin: "https://www.linkedin.com/in/vasilis-berberidis-786145153/",
  gmail: "berberidisv@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/vedansh.vijaywargiya/",
  // twitter: "https://twitter.com/vedansh_v_/",
  // instagram: "https://www.instagram.com/vedv_2002/",
};

const skills = {
  data: [
    {
      title: "Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating Microservices with Spring Boot framework ",
        "⚡ Building websites using Wordpress",
        "⚡ Developing Wordpress plugins/ modifying existing ones",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "logos:wordpress-icon",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "Bootstrap",
        //   fontAwesomeClassname: "simple-icons:bootstrap",
        //   style: {
        //     color: "#563d7c",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Flask",
        //   fontAwesomeClassname: "simple-icons:flask",
        //   style: {
        //     color: "#000000",
        //   },
        // },
        // {
        //   skillName: "Django",
        //   fontAwesomeClassname: "simple-icons:django",
        //   style: {
        //     color: "#0c4b33",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring boot",
          fontAwesomeClassname: "logos:spring-icon",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#E94E32",
          },
        },

        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MASTER IN ADVANCED SOFTWARE DEVELOPMENT TECHNOLOGIES",
      subtitle: "University of Piraeus - Greece",
      logo_path: "Unipi-logo.png",
      alt_name: "SSEC",
      duration: "2016 - 2020",
      descriptions: [
        "⚡  Thesis: MyCovidUnipi , Cloud based android application to notify users of COVID-19 exposure.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.unipi.gr/unipi/en/",
    },
    {
      title: "BACHELOR IN COMPUTER SCIENCE",
      subtitle: "University of Piraeus - Greece",
      logo_path: "Unipi-logo.png",
      alt_name: "SSEC",
      duration: "2012 - 2016",
      descriptions: [
        "⚡  Degree grade : 7.8.",
        "⚡  Specialization: software technology and intelligent systems",
        "⚡  Thesis: MyCrowdCharger (Published) Cloud based android https://ieeexplore.ieee.org/document/7785382",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.unipi.gr/unipi/en/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "Backyard Hacks 2.0",
      logo_path: "hackathon1.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#f47e2c",
    },
    {
      title: "Hackathon",
      subtitle: "HyperHacks",
      logo_path: "hackathon2.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Contributor's Hack",
      subtitle: "Hakin Codes",
      logo_path: "HakinCodes.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
      alt_name: "Opensource Event",
      color_code: "#fefd7b",
    },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    {
      title: "Olympiad",
      subtitle: "Ramanujan Mathematics Olympiad",
      logo_path: "Olympiad.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "Competitive Programming",
      subtitle: "Reply Challenges",
      logo_path: "Reply.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Competitive Programming",
      subtitle: "Google Hash Code",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Training",
      subtitle: "30 Days of Open Source",
      logo_path: "CFC.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#a60000",
    },
    {
      title: "Training",
      subtitle: "Git Learning",
      logo_path: "Progate.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#88e7ce",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software engineer",
          company: "Netcompany-Intrasoft",
          company_url: "https://www.netcompany-intrasoft.com/",
          logo_path: "netcompany1.png",
          duration: "Jul 2018 - Now",
          location: "Greece - Athens",
          description: `·This role required IBM’s WebSphere administration skills, IBM Integration Designer skills, in order to\n
develop and deploy applications to the application server,
·Oracle Service Bus skills (XQuery, creating pipelines, JMS Queues, Pipeline templates etc.), in addition
there were administration tasks performed on the server.
·J2EE knowledge to design build test and deploy application to server.
·Create Java tools to automate daily tasks.
·Developing Java application with Spring Boot to create microservices
·Communication with the client.
·Train new entries to the company.
·Propose and design solutions for new projects.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "DB DEVELOPER / ETL DEVELOPER",
          company: "IBM",
          company_url: "https://www.ibm.com/",
          logo_path: "ibm.png",
          duration: "Mar 2017 - Jul 2018",
          location: "Greece - Athens",
          description: `·This role required ORACLE's database skills
I was responsible for developing various and complex PL-SQL Scripts , Optimizing SQL Scripts
Creating Bash Scripts to communicate with external Systems
Working with ORACLE’s ETL Software ODI
·Developing Java software to export DB objects to the File System
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "INTEGRATOR DEVELOPER",
          company: "IBM",
          company_url: "https://www.ibm.com/",
          logo_path: "ibm.png",
          duration: "Mar 2016 Jun - Mar 2017",
          location: "Greece - Athens",
          description: `This role required SOA Suite (ORACLE), IBM’s WebSphere skills.
I was responsible for developing: BPELS, JMS Queues, OSB Flows , Transformations ( XQuery ) , PL-SQL
Scripts

          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "R&D Member",
    //       company: "Webarch Club",
    //       company_url: "https://www.webarchsrm.com/",
    //       logo_path: "Webarch.jfif",
    //       duration: "Mar 2020 - Nov 2020",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Leader",
    //       company: "Code For Cause",
    //       company_url: "https://www.codecau.se/",
    //       logo_path: "CFC.jfif",
    //       duration: "Nov 2020 - Present",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
    //       color: "#a60000",
    //     },
    //     {
    //       title: "Machine Learning - Research associate",
    //       company: "Next Tech Lab",
    //       company_url: "https://nextech.io/",
    //       logo_path: "NTL.jfif",
    //       duration: "Oct 2020 - Present",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
    //       color: "#62cff0",
    //     },
    //     {
    //       title: "Campus Ambassador",
    //       company: "Bagcampus",
    //       company_url: "https://bagcampus.in/",
    //       logo_path: "Bagcampus.jpg",
    //       duration: "Dec 2020 - May 2021",
    //       location: "Remote",
    //       description:
    //         "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
    //       color: "#0059c9",
    //     },
    //     {
    //       title: "Volunteer",
    //       company: "Google Crowdsource",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "GCS.jfif",
    //       duration: "Sept 2020 - Present",
    //       location: "Remote",
    //       description:
    //         "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
    //       color: "#ffffff",
    //     },
    //     {
    //       title: "Student Volunteer",
    //       company: "National Service Scheme",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "NSS.jfif",
    //       duration: "Dec 2019 - May 2020",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#282b6c",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Screenshot_1_2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@vedanshvijay/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Mind Space",
      url: "https://www.mindspace.cf/",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
