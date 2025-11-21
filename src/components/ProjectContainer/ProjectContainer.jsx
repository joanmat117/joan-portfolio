import {RiGithubFill,IcRoundLaunch } from '../Icons'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {project.image && (<img
    src={
      project.image.startsWith("http")
        ? project.image
        : `/images/${project.image}`
    }
    alt={`${project.name} screenshot`}
    style={{ width: '100%', objectFit: 'cover' }}
    />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item,i) => (
          <li key={i} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <RiGithubFill/>
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <IcRoundLaunch/>
      </a>
    )}
  </div>
)

export default ProjectContainer
