const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://joan-portfolio.vercel.app/',
  title: 'Joan Matias',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joan Matias',
  role: 'React Developer',
  picture: 'https://github.com/joanmat117.png',

  description:
    'Frontend developer passionate about creating efficient and responsive UIs with React, Next.js, TypeScript, and Tailwind CSS. Possesses solid database knowledge (SQL, Supabase) and is motivated to solve problems sustainably and scalably.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/joan-matias-dominguez-3652a1365/',
    github: 'https://github.com/joanmat117',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
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
