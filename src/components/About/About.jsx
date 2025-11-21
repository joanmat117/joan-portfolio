import { about } from '../../portfolio'
import './About.css'
import {MdiLinkedin, RiGithubFill} from '../Icons'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

    <div className='about__intro'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
              <RiGithubFill/>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
              <MdiLinkedin/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
