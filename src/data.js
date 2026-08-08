const data = {
  name: 'Asim Hasnain',
  role: 'Frontend Developer',
  tagline:
    'I build fast, accessible, and delightful web experiences with React.',
  email: 'asimhasnain96@gmail.com',
  whatsapp: '919555514552',
  location: 'Bareilly (U.P), India',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/erasim',
    linkedin: 'https://www.linkedin.com/in/asimhasnain/',
    twitter: 'https://twitter.com/yourusername',
  },
  about: [
    'I am a frontend developer with a passion for turning complex problems into simple, beautiful, and intuitive interfaces. I specialize in React and modern JavaScript, with a strong focus on performance, accessibility, and clean code.',
    'Over the years I have worked on everything from marketing sites to large-scale dashboards, always keeping the user experience at the center. I love collaborating with designers and back-end developers to ship products that people enjoy using.',
  ],
  skills: {
    frontend: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Redux'],
    tools: ['Git & GitHub', 'Vite', 'Webpack', 'Jest', 'Storybook', 'Figma'],
  },
  projects: [
    {
      title: 'ResumeForge',
      description:
        'An interactive resume builder with a live preview. Type your details on the left and watch your resume update instantly on the right — then download it as a polished PDF. Includes 4 layout templates, 6 accent themes, and dynamic sections.',
      stack: ['React', 'JavaScript', 'CSS'],
      demo: 'https://erasim.github.io/resume_maker/',
      code: 'https://github.com/erasim/resume_maker',
    },
    {
      title: 'Movie Booking',
      description:
        'A seat-booking app that loads a live movie catalog from a REST API, lets users pick a movie and reserve multiple seats, then confirms the booking with validated contact details.',
      stack: ['JavaScript', 'HTML', 'CSS', 'REST API'],
      demo: 'https://erasim.github.io/Movie-Booking-JS/',
      code: 'https://github.com/erasim/Movie-Booking-JS',
    },
    {
      title: 'Shopping Cart',
      description:
        'A React e-commerce cart where users can browse products, add items to the cart, adjust quantities, and see live totals — with a responsive layout and clean component structure.',
      stack: ['React', 'JavaScript', 'CSS'],
      demo: 'https://erasim.github.io/shopping_cart/',
      code: 'https://github.com/erasim/shopping_cart',
    },
    {
      title: 'University Website',
      description:
        'A multi-page responsive university site with home, courses, services, about, and contact sections — built with semantic HTML and modern CSS.',
      stack: ['HTML', 'CSS'],
      demo: 'https://erasim.github.io/HTML-CSS-Mini-Project-University/',
      code: 'https://github.com/erasim/HTML-CSS-Mini-Project-University',
    },
    {
      title: 'JS Calendar',
      description:
        'An interactive calendar app with month navigation, a live clock, customizable themes, and per-date notes saved in localStorage — all built with vanilla JavaScript.',
      stack: ['JavaScript', 'HTML', 'CSS'],
      demo: 'https://erasim.github.io/js-calendar/',
      code: 'https://github.com/erasim/js-calendar',
    },
  ],
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Freelancer',
      period: '2024 - Present',
      description:
        'Working with clients to design, build, and deliver responsive websites and web apps. I handle everything from UI/UX translation and component development to performance optimization and deployment.',
      points: [
        'Delivered 15+ client projects ranging from landing pages to full React applications.',
        'Built reusable component libraries that cut development time by 30%.',
        'Optimized site performance, improving Lighthouse scores above 90.',
        'Communicated directly with clients to gather requirements and ship on time.',
      ],
    },
    // {
    //   role: 'Junior Frontend Developer',
    //   company: 'StartupHub',
    //   period: '2021 - 2023',
    //   points: [
    //     'Developed reusable component library adopted by 3 product teams.',
    //     'Improved Lighthouse accessibility score from 72 to 98.',
    //   ],
    // },
  ],
};

export default data;
