export const education: any[] = [
  {
    dates: ["Aug 2007", "Dec 2011"],
    location: {
      city: "Champaign, IL",
      logo: "illinois",
      name: "University of Illinois At Urbana-Champaign",
    },
    title: "BA: Information Systems & Information Technology",
    url: "https://illinois.edu/",
  },
  {
    dates: ["Jan 2010", "Jun 2010"],
    location: {
      city: "Vienna, Austria",
      logo: "wu",
      name: "Wirtschaftsuniversität Wien",
    },
    title: "Austria-Illinois Exchange Program",
    url: "https://www.wu.ac.at/en/",
  },
];

export const experience: any[] = [
  {
    dates: [`Jul 2025`, `Present`],
    overview:
      "Volunteer work focused on technical development and support for non-profit organizations.",

    details: `•  Performed in-depth website audit report and provided web hosting guidance for Burn Prevention Network, saving $4,762 annually in hosting and contractor costs using Google PageSpeed Insights, Lighthouse, 
    •  Modernized platform and created branding plan for The Luck Group using Figma, saving $3,700+, allowing them to reach a greater audience, boost ability to fundraise, and introduce more disadvantaged families to outdoor events.`,
    location: {
      logo: `catchafire`,
      name: `Catchafire`,
    },
    tags: ["remote", "react", "volunteer"],
    title: "Staff Frontend Software Engineer",
    url: "https://catchafire.org/",
  },
  {
    dates: [`Feb 2025`, `May 2025`],
    overview:
      "Helped build an internal admin SPA for a web platform using Next.js, React, TypeScript, TanStack Table, React Hook Form, and Prisma to connect to a PostgreSQL instance.",

    details: `• Created PoC for internal admin site as a standalone SPA to create and manage 750K+ event planners, website themes, blog posts, and venues with role-based access using TypeScript, Next.js, and Prisma. 
    • Designed advanced, reusable data management components with sorting, pagination, in-line editing, multi-select, and type-specific multi-column filtering using TypeScript, React, and TanStack (React Query, React Table).
    • Implemented optimized server-state caching and data synchronization strategies using TypeScript and TanStack React Query, projected to improve internal data management efficiency by 40%.
    • Enhanced photo upload/editing and Geolocation search features using JavaScript, Ruby on Rails, and Google Places API, providing a seamless, consistent experience for over 750,000 users across the platform.`,
    location: {
      city: `Chicago, IL`,
      logo: `eventcreate`,
      name: `EventCreate`,
    },
    tags: ["startup", "remote", "react", "rails", "saas", "b2b"],
    title: "Staff Frontend Software Engineer",
    url: "https://eventcreate.com/",
  },
  {
    dates: [`May 2022`, `Sep 2024`],
    overview: `Led front-end development and team processes at a B2B SaaS startup, enhancing user experience and performance through innovative solutions and strong leadership.`,
    details: `•  Developed high-scale invitation engine in TypeScript, React, TanStack, and MUI, allowing organizers to invite from 100k+ individuals, groups, and/or Slack Channels, managing complex state, scheduling logic, and real-time guest list updates from Zoom and in-person QR check-ins, increasing Net Promoter Score by 40%.
    • Designed and built drag-and-drop survey builder with conditional logic using TypeScript, React, MUI, Axios, and TanStack React Query, multi-channel automated distribution (Slack, email, QR code, RSVP), real-time analytics, and built-in templates, decreasing survey management time by 40% and increasing attendee engagement by 35%.
    • Adopted GraphQL across TypeScript, React, and Ruby on Rails, utilizing automated schema/type generation from ActiveRecord models and standardizing custom React Hooks to reduce feature delivery time by 40%, eliminate client/server contract bugs through end-to-end type safety, and improve rendering performance by 65%.
    • Re-architected complex multi-step event creation workflow into unified, dynamic form using TypeScript, React, MUI, and TanStack React Query, with advanced validation and dependency logic, reusable composite form components, and integrations with Zoom, Google Meet, and Cloudinary to reduce event creation drop-off rate by 50%.
    • Implemented real-time guest list updates and notifications using WebSockets and server-sent events, enhancing user experience and engagement during events.`,
    location: {
      city: `Chicago, IL`,
      logo: `fivetonine`,
      name: `Five to Nine`,
    },
    tags: ["startup", "remote", "react", "rails", "saas", "b2b"],
    title: "Staff Frontend Software Engineer",
    url: "https://fivetonine.co/",
  },
  {
    dates: ["Jun 2020", "Apr 2022"],
    overview: `Played a key role in front-end modernization and team development at a high-growth B2B and B2C SaaS startup, enhancing user engagement and operational efficiency through innovative solutions and strong leadership.`,
    details: `• Developed scalable JavaScript and React-based talent marketplace and notification systems for recruiters supporting 500k+ users, enabling faster talent discovery and increasing customer time-to-value by an estimated 60%.
    • Led implementation of redesigned marketing site and core engagement features using JavaScript, React, and Ruby on Rails, improving Lighthouse scores by 30+ points, reducing page load time by 25%, and increasing conversion by 22%.
    • Integrated 3rd-party calendar functionality via Nylas API using JavaScript and React, allowing recruiters to view actual availability and offer timeslot suggestions based on real-time availability, streamlining interview scheduling by 3X.`,
    location: {
      city: "Chicago, IL",
      logo: "tmp",
      name: "The Mom Project",
    },
    tags: ["startup", "remote", "react", "rails", "saas", "b2b", "b2c"],
    title: "Staff Frontend Software Engineer",
    url: "https://www.themomproject.com/",
  },
  {
    dates: ["Jun 2016", "Jan 2020"],
    overview: `Led front-end development and team processes at a B2E SaaS startup, enhancing user experience and performance through innovative solutions and strong leadership.`,
    details: `• Led migration from AngularJS to modern Angular with TypeScript and RxJS, using lazy loading, modular architecture, and dependency injection to reduce UI/UX bugs by 65% and improve customer satisfaction by 75%.
    • Developed visualizations including custom GPA vs. ACT/SAT scatter chart using TypeScript, Angular, SVG, and Google Charts to visualize historical admissions data, projected to increase student engagement by 30%.`,
    location: {
      city: "Chicago, IL",
      logo: "nexttier",
      name: "NextTier Education / Follett Corporation",
    },
    tags: ["startup", "angular", "saas", "b2e"],
    title: "Staff Frontend Software Engineer",
    url: "https://www.nexttier.com/",
  },
  {
    dates: ["Jun 2012", "Jun 2016"],
    overview: `Delivered full-stack web solutions for clients across various industries, enhancing user engagement and operational efficiency through innovative digital solutions and strong technical expertise.`,
    details: `• Built and/or enhanced 12+ performant, secure, and scalable digital solutions for client projects across Healthcare, Insurance, Energy & Utilities, Mergers & Acquisitions, and Banking sectors using .NET (C#), JavaScript, and AngularJS.
    • Led front-end development using JavaScript and AngularJS of product for utility companies to streamline clean energy adoption process to build role-based dashboards, dynamic forms, forecasting visualizations, and data tables for providers, contractors, reviewers, and customers, increasing transparency and efficiency by 70%.`,
    location: {
      city: "Chicago, IL",
      logo: "wmp",
      name: "West Monroe Partners",
    },
    tags: ["consulting", "microsoft", "angular", "b2b"],
    title: "Senior Frontend Software Engineer",
    url: "https://www.westmonroepartners.com/",
  },
].map((e) => ({
  ...e,
  details:
    typeof e.details === "string"
      ? e.details
          .replace(/\n*•\s+/g, ";")
          .split(";")
          .filter((i) => i?.length > 0)
      : e.details,
}));

export const overview =
  "I am a dedicated and user-focused front-end developer with 13+ years of experience building all aspects of the UX and UI for web and mobile apps. I'm passionate about creating engaging, intuitive experiences with consistent, delightful design, all built using clean, well-organized, and reusable code.";
