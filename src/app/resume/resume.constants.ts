export const animationConfig = {
  easing: "500ms cubic-bezier(0.35, 0, 0.25, 1)",
  in: { opacity: 1, transform: "none" },
  out: { opacity: 0, transform: "translateY(-65px)" },
};

export const education: any[] = [
  {
    dates: [`Aug 2007`, `Dec 2011`],
    location: {
      city: `Champaign, IL`,
      logo: `illinois`,
      name: `University of Illinois At Urbana-Champaign`,
    },
    title: `BA: Information Systems & Information Technology`,
    url: `https://illinois.edu/`,
  },
  {
    dates: [`Jan 2010`, `Jun 2010`],
    location: {
      city: `Vienna, Austria`,
      logo: `wu`,
      name: `Wirtschaftsuniversität Wien`,
    },
    title: `Austria-Illinois Exchange Program`,
    url: `https://www.wu.ac.at/en/`,
  },
];

export const experience: any[] = [
  {
    dates: [`Jun 2020`, `Apr 2022`],
    details: [
      `Developed new features using React and Ruby on Rails`,
      `Converted views from Rails HAML files to React components`,
      `Implemented Action Center, a flexible notification / suggestion feature that encouraged moms to take certain actions within the platform`,
      `Translated revamped homepage designs to code, utilizing advanced CSS grids and animations`,
      `Acted as technical lead on the implementation of Diverse Talent Clouds, an internal and client-facing UI that utilized our existing “Match” engine to curate pre-vetted & available top talent, emphasizing gender & ethnic diversity and in-demand skill sets spanning multiple industries`,
      `Contributed to the integration of Nylas into the platform, allowing clients (employers) to connect their Google/Microsoft/Yahoo calendar to the platform, which was then used to determine (in real-time) which time slots they’d actually be available to interview a job applicant`,
      `Created shared components to decrease code duplication, simplify logic, and ensure UI/UX consistency`,
      `Built feature tests using Rspec and Jest`,
      `Acted as Product/Engineering/Design team knowledge base owner by establishing a logical, clearly organized hierarchy, adding consistently named & formatted pages, consolidating information from GitHub wiki, Nuclino, and Google Drive into a single source of truth in Notion, then enhancing it via connected databases, interactive features, and reusable templates for onboarding, meeting notes, technical design docs, and more`,
      `Mentored several junior developers`,
    ],
    location: {
      city: `Chicago, IL`,
      logo: `tmp`,
      name: `The Mom Project`,
    },
    title: `Senior Software Engineer`,
    url: `https://www.themomproject.com/`,
  },
  {
    dates: [`Jun 2016`, `Jan 2020`],
    details: [
      `Rewrote AngularJS features in Angular (2+)`,
      `Implemented a front-end framework (Angular Material) to increase consistency of UI/UX & decrease custom CSS`,
      `Developed new features & refactored existing logic using modular design and reusable components`,
      `Built a cross-platform mobile app using Ionic`,
      `Improved overall app performance by optimizing assets, implementing lazy loading, and utilizing RxJS and the Angular async pipe to mitigate the risk of memory leaks`,
      `Established, documented, and communicated guidelines around code formatting, file organization, and file/module/function/variable naming to increase readability & ensure consistency`,
      `Acted as scrum master — translated user stories into clearly defined tasks, utilized planning poker for effort estimation, managed & groomed the backlog, and led daily standups`,
      `Collaborated w/ other developers, designers, testers, PMs, customer service reps, and salespeople for customer feedback, requirements gathering, testing, and issue identification/tracking`,
      `Managed team communication channels: configured teams/projects/tasks in Asana & channels/teams/apps in Slack, organized files in Google Drive & Dropbox`,
    ],
    location: {
      city: `Chicago, IL`,
      logo: `nexttier`,
      name: `NextTier Education / Follett Corporation`,
    },
    title: `Lead Front-End Developer`,
    url: `https://www.nexttier.com/`,
  },
  {
    dates: [`Jun 2012`, `Jun 2016`],
    details: [
      `Worked with companies across multiple industries (Healthcare, Insurance, Energy & Utilities, Mergers & Acquisitions, Banking) on projects involving full-stack web development, UI design, mobile optimization, platform customization, UX strategy, code maintenance, requirements gathering, and more`,
      `Focused primarily on front-end design and development, utilizing AngularJS, Bootstrap, and Angular Material, but also worked in .NET, SQL, and other tools in the Microsoft data & development suites`,
    ],
    location: {
      city: `Chicago, IL`,
      logo: `wmp`,
      name: `West Monroe Partners`,
    },
    title: `Senior Technology Consultant`,
    url: `https://www.westmonroepartners.com/`,
  },
];

export const overview: string = `I am a dedicated and user-focused front-end web developer with 10+ years of experience building all aspects of the UX and UI for web and mobile apps. I’m passionate about creating engaging, intuitive experiences via consistent, delightful design, all built using clean, well-organized, and reusable code.`;
