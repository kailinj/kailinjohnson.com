export const animationConfig = {
  easing: "500ms cubic-bezier(0.35, 0, 0.25, 1)",
  in: { opacity: 1, transform: "none" },
  out: { opacity: 0, transform: "translateY(-65px)" }
};
export const education: any[] = [
  {
    dates: [`Aug 2007`, `Dec 2011`],
    location: {
      city: `Champaign, IL`,
      logo: `illinois`,
      name: `University of Illinois At Urbana-Champaign`
    },
    title: `BA: Information Systems & Information Technology`,
    url: `https://illinois.edu/`
  },
  {
    dates: [`Jan 2010`, `Jun 2010`],
    location: {
      city: `Vienna, Austria`,
      logo: `wu`,
      name: `Wirtschaftsuniversität Wien`
    },
    title: `Austria-Illinois Exchange Program`,
    url: `https://www.wu.ac.at/en/`
  }
];
export const experience: any[] = [
  {
    dates: [`Jun 2020`, `Present`],
    details: [],
    location: {
      city: `Chicago, IL`,
      logo: `tmp`,
      name: `The Mom Project`
    },
    title: `Senior Software Engineer`,
    url: `https://www.themomproject.com/`
  },
  {
    dates: [`Jun 2016`, `Jan 2020`],
    details: [
      {
        title: `Revamped web app by`,
        items: [
          `Rewriting AngularJS features using Angular (2+), TypeScript, and Webpack.`,
          `Implementing a front-end framework (Angular Material) to increase consistency of UI/UX & decrease custom CSS.`,
          `Componentizing features/widgets/layouts to decrease code duplication.`,
          `Utilizing RxJS and the Angular async pipe to mitigate the risk of memory leaks & improve overall performance.`,
          `Refactoring existing features to simplify logic, increase formatting/organization/naming consistency, and utilize existing frameworks.`,
          `Optimizing photos, icons, fonts, and other static assets to improve load times.`
        ]
      },
      {
        title: `Build various features & apps`,
        items: [
          `Developing new features using modular design and reusable components.`,
          `Built a cross-platform mobile app using Ionic.`
        ]
      },
      {
        title: `Soft skills`,
        items: [
          `Collaborating w/ other developers, designers, testers, PMs, customer service reps, and salespeople for customer feedback, requirements gathering, testing, and issue identification/tracking.`,
          `Managing team communication channels: configuring teams/projects/tasks in Asana & channels/teams/apps in Slack, organizing files in Google Drive & Dropbox.`
        ]
      }
    ],
    location: {
      city: `Chicago, IL`,
      logo: `nexttier`,
      name: `NextTier Education / Follett Corporation`
    },
    title: `Lead Front-End Developer`,
    url: `https://www.nexttier.com/`
  },
  {
    dates: [`Jun 2012`, `Jun 2016`],
    details: [
      `Worked with companies across multiple industries (Healthcare, Insurance, Energy & Utilities, Mergers & Acquisitions, Banking) on projects involving full-stack web development, UI design, mobile optimization, platform customization, UX strategy, code maintenance, requirements gathering, and more.`,
      `Focused primarily on front-end design and development, utilizing AngularJS, Gulp, Bootstrap, and Angular Material.`
    ],
    location: {
      city: `Chicago, IL`,
      logo: `wmp`,
      name: `West Monroe Partners`
    },
    title: `Senior Technology Consultant`,
    url: `https://www.westmonroepartners.com/`
  }
];
export const overview: string = `I am a dedicated and user-focused front-end web developer with 8+ years of experience using JavaScript, HTML5, and CSS to build all aspects of the UX and UI for web and mobile apps. I'm passionate about creating engaging, intuitive experiences via consistent, delightful design, all built using clean, well-organized, and reusable code.`;
