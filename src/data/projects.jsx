export const projectsData = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform with real-time inventory management and seamless checkout experience.',
    longDescription: 'Built a full-featured e-commerce platform using Next.js and React, featuring server-side rendering for optimal SEO, real-time inventory updates, and a smooth checkout process. Integrated with Stripe for secure payments and implemented advanced filtering and search capabilities.',
    technologies: ['NextJS', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    imageUrl: '/projects/ecommerce.jpg',
    thumbnailUrl: '/projects/ecommerce-thumb.jpg',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    category: 'nextjs',
    featured: true,
    completedDate: '2024-11',
    challenges: [
      'Implementing real-time inventory synchronization across multiple users',
      'Optimizing performance for large product catalogs',
      'Creating a seamless mobile shopping experience'
    ],
    outcomes: [
      'Achieved 95+ Lighthouse performance score',
      'Reduced cart abandonment rate by 30%',
      'Handled 10,000+ concurrent users during peak traffic'
    ]
  },
  {
    id: 'task-management-app',
    title: 'Collaborative Task Manager',
    description: 'A real-time collaborative task management application with drag-and-drop functionality and team features.',
    longDescription: 'Developed a comprehensive task management solution using React and Ruby on Rails. Features include real-time collaboration, drag-and-drop task organization, team workspaces, and detailed analytics. Implemented WebSocket connections for instant updates across all team members.',
    technologies: ['React', 'Ruby on Rails', 'Redux', 'WebSockets', 'PostgreSQL', 'SCSS'],
    imageUrl: '/projects/task-manager.jpg',
    thumbnailUrl: '/projects/task-manager-thumb.jpg',
    demoUrl: 'https://demo-tasks.example.com',
    githubUrl: 'https://github.com/yourusername/task-manager',
    category: 'react',
    featured: true,
    completedDate: '2024-08',
    challenges: [
      'Implementing real-time synchronization without conflicts',
      'Creating an intuitive drag-and-drop interface',
      'Scaling WebSocket connections for large teams'
    ],
    outcomes: [
      'Supported teams of up to 100 members',
      'Achieved sub-100ms real-time update latency',
      'Increased team productivity by 40% based on user feedback'
    ]
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder SaaS',
    description: 'A SaaS platform that allows developers to create beautiful portfolios without coding.',
    longDescription: 'Created a no-code portfolio builder using Next.js with a drag-and-drop interface, customizable themes, and one-click deployment. Integrated with GitHub API for automatic project imports and analytics dashboard for tracking portfolio performance.',
    technologies: ['NextJS', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/projects/portfolio-builder.jpg',
    thumbnailUrl: '/projects/portfolio-builder-thumb.jpg',
    demoUrl: 'https://demo-portfolio-builder.example.com',
    githubUrl: 'https://github.com/yourusername/portfolio-builder',
    category: 'nextjs',
    featured: true,
    completedDate: '2024-05',
    challenges: [
      'Building a flexible drag-and-drop editor',
      'Implementing custom domain support',
      'Creating a theme system that works across all templates'
    ],
    outcomes: [
      '1,000+ portfolios created in first 3 months',
      'Average build time reduced to under 5 minutes',
      '4.8/5 user satisfaction rating'
    ]
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization and custom reporting.',
    longDescription: 'Built an enterprise-grade analytics dashboard using React and Ruby on Rails. Features include customizable widgets, real-time data streaming, advanced filtering, and exportable reports. Implemented complex data visualizations using D3.js and Chart.js.',
    technologies: ['React', 'Ruby on Rails', 'D3.js', 'Chart.js', 'Redis', 'SCSS'],
    imageUrl: '/projects/analytics-dashboard.jpg',
    thumbnailUrl: '/projects/analytics-dashboard-thumb.jpg',
    demoUrl: 'https://demo-analytics.example.com',
    category: 'rails',
    featured: false,
    completedDate: '2024-02',
    challenges: [
      'Handling large datasets efficiently',
      'Creating responsive and interactive charts',
      'Implementing real-time data updates without performance degradation'
    ],
    outcomes: [
      'Processed 1M+ data points per second',
      'Reduced report generation time by 70%',
      'Improved decision-making speed for stakeholders'
    ]
  },
  {
    id: 'social-media-app',
    title: 'Social Media Platform',
    description: 'A modern social media application with posts, stories, messaging, and live streaming features.',
    longDescription: 'Developed a full-stack social media platform using Next.js and Node.js. Implemented features like infinite scroll feeds, real-time messaging, story creation with filters, and live streaming capabilities. Focused heavily on performance optimization and responsive design.',
    technologies: ['NextJS', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
    imageUrl: '/projects/social-media.jpg',
    thumbnailUrl: '/projects/social-media-thumb.jpg',
    demoUrl: 'https://demo-social.example.com',
    category: 'nextjs',
    featured: false,
    completedDate: '2023-12',
    challenges: [
      'Implementing efficient infinite scroll with thousands of posts',
      'Building a real-time messaging system',
      'Optimizing image and video uploads'
    ],
    outcomes: [
      'Supported 50,000+ active users',
      'Achieved 99.9% uptime',
      'Average page load time under 1.5 seconds'
    ]
  },
  {
    id: 'design-system',
    title: 'Component Design System',
    description: 'A comprehensive design system and component library for enterprise applications.',
    longDescription: 'Created a complete design system with 50+ reusable React components, comprehensive documentation, and Storybook integration. Implemented accessibility standards (WCAG 2.1 AA), theming support, and automated testing for all components.',
    technologies: ['React', 'TypeScript', 'Storybook', 'SCSS', 'Jest', 'Chromatic'],
    imageUrl: '/projects/design-system.jpg',
    thumbnailUrl: '/projects/design-system-thumb.jpg',
    demoUrl: 'https://demo-design-system.example.com',
    githubUrl: 'https://github.com/yourusername/design-system',
    category: 'ui-design',
    featured: false,
    completedDate: '2023-09',
    challenges: [
      'Ensuring consistency across all components',
      'Implementing comprehensive accessibility features',
      'Creating flexible theming system'
    ],
    outcomes: [
      'Reduced development time by 50% for new features',
      'Achieved 100% WCAG 2.1 AA compliance',
      'Adopted by 5 internal teams'
    ]
  }
];
