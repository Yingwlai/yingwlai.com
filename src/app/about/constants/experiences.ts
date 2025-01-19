const wtcPositions = [
  {
    id: 'wtc-junior-frontend',
    title: 'Junior Front-End Engineer',
    timePeriod: 'January 2018 - June 2019'
  }
];

const grabyoPositions = [
  {
    id: 'grabyo-senior-frontend',
    title: 'Senior Front-End Engineer',
    timePeriod: 'January 2022 - April 2022'
  },
  {
    id: 'grabyo-frontend',
    title: 'Front-End Engineer',
    timePeriod: 'June 2019 - December 2021'
  }
];

const nutmegPositions = [
  {
    id: 'nutmeg-senior-frontend',
    title: 'Senior Front-End Engineer',
    timePeriod: 'January 2024 - Present'
  },
  {
    id: 'nutmeg-frontend',
    title: 'Front-End Engineer',
    timePeriod: 'May 2022 - December 2023'
  }
];

export const experiences = [
  {
    id: 'nutmeg',
    companyName: 'Nutmeg',
    positions: nutmegPositions,
    jobResponsibilites: [
      `
        Adding Identity Verification to our Know Your Customer checks,
        ensuring that the Identity Verification flow allows for white-label styling using our design tokens.
      `,
      `
        Cross-collaborating with wider Front-End domain teams to improve the onboarding flow for Know Your Customer checks to meet standards and compliance.
      `,
      `
        Migrating multiple SPAs on our platform from Enzyme to React-Testing-Library,
        contributing to best practices of Unit and Integration Testing.
      `,
      `
        Implementing Cypress Paralleliation in Jenkins for our End-to-End tests, reducing End-to-End run times from 30-35 minutes down to 8-12 mintues.
      `,
      `
        Pioneering a custom Node.js tagging and filtering solution, to reduce resource consumption in Jenkins
        and to further decrease the End-to-End run time on our platform.
      `
    ]
  },
  {
    id: 'grabyo',
    companyName: 'Grabyo',
    positions: grabyoPositions,
    jobResponsibilites: [
      `
        Working mainly on the Live Production platform, a web browser application to allow clients to run their live production shows
        on the web, improving the users ability to run their shows remotely. Projects include, the application’s Multiviewer, a way for
        users to display multiple streams on one display, detachable monitors, a way for users to detach preview and program streams
        for a more controlled visibility and our own remote guest application.
      `,
      `
        Created and maintained a Single Page Application to be used across different browsers and devices for remote guest
        commentary product using Next.js, improving the application with screen share feature and intercom audio panning feature.
      `,
      `
        Migrating the Live Production user interface from Backbone to React and data models from Backbone to Mobx-State-Tree.
      `,
      `
        Migrate the Drag and Drop functionality on the Live Production platform from jQuery to React DnD.
      `,
      `
        Pioneering the improvement of Unit and Integration Testing approaches on the Front-End team, migrating our tests from
        Enzyme to React-Testing-Library.
      `
    ]
  },
  {
    id: 'wtc',
    companyName: 'Wunderman Thompson Commerce',
    positions: wtcPositions,
    jobResponsibilites: [
      `
        Working with different clients to help improve the performance of their e-commerce websites and develop features, create
        landing pages and improve performance of their e-commerce websites to improve traffic.
      `,
      `  
        Upgrading legacy coded website to React, using Redux for state management.
      `,
      `
        Fixing defects and optimising website performance through code refactoring.
      `,
      `
        Proactively aiding Testers with manual testing across multiple browsers.
      `,
      `
        Mentoring new Junior Developers, creating, contributing and improving training materials for Graduate scheme.
      `
    ]
  }
]
