const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://joan-portfolio.vercel.app/',
  title: 'Joan Matias',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joan Matias',
  role: 'Frontend Developer',
  picture: 'https://github.com/joanmat117.png',

  description:
    'Frontend developer passionate about creating efficient and responsive UIs with React, Next.js, TypeScript, and Tailwind CSS. Possesses solid database knowledge (SQL, Supabase) and is motivated to solve problems sustainably and scalably.',
  resume: '/CV_Joan_Matias_Dominguez.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/joan-matias-dominguez-3652a1365/',
    github: 'https://github.com/joanmat117',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ideal Energy',
    description:
      'A high-performance news website with an elegant design, perfect SEO, and a multilingual structure for global reach.',
    stack: ['Nextjs', 'TypeScript', 'React','Supabase','TailwindCSS'],
    sourceCode: 'https://github.com/joanmat117/energia-ideal',
    livePreview: 'https://energiaideal.vercel.app/en',
    image: 'https://iili.io/f2Lmg9I.png',
  },
  {
    name: 'Online Bible',
    description:
      'A modern web application for reading the Bible, built with Next.js and React. It features a clean, responsive interface crafted with Material UI, a centralized state management via Redux, and a scalable Screaming Architecture for superior code organization.',
    stack: ['Nextjs', 'TypeScript', 'React','Material UI','Redux'],
    sourceCode: 'https://github.com/joanmat117/online-bible',
    livePreview: 'https://online-bible.vercel.app/home',
    image: 'https://iili.io/f2QFsVI.jpg',
  },
  {
    name: 'Community Website',
    image:'https://i.postimg.cc/HnLtBzpt/ldyn-picture.jpg',
    description:
      'A modern website for a community, featuring a themed and engaging design. It includes a full authentication system, an internal CMS for content management, and a responsive, high-performance user interface.',
    stack: ['Supabase', 'TypeScript', 'React','TailwindCSS','Shadcn','Zustand','Serverless Function'],
  },
  {
    name:'Chatbot Room',
    image:'https://i.postimg.cc/1XZ8z5dQ/chatbot-room-picture.jpg',
    description:'A modern platform offering specialized AI-powered chatbots. Users can choose from multiple assistants (finance, health, academic, etc.) to get expert, contextual help across various fields, featuring an intuitive interface and responsive design.',
    stack:['React','TailwindCSS','Typescript','Google Gemini'],
    sourceCode:'https://github.com/joanmat117/chatbot-room',
    livePreview:'https://chatbot-room.vercel.app'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Nextjs',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'TypeScript',
  'JavaScript',
  'Vitest',
  'CSS',
  'HTML',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joanmat@proton.me',
}

export { header, about, projects, skills, contact }
