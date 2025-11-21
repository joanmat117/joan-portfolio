import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'
import { LucideCopy, MaterialSymbolsCloseRounded, SiCheckFill } from '../Icons'

const Contact = () => {
  if (!contact.email) return null
  const [copyState,setCopyState] = useState(0)

  const copyEmail = ()=>{
    try {
      navigator.clipboard.writeText(contact.email)
      setCopyState(1)
    } catch(e){
      setCopyState(-1)
    } finally {
      setTimeout(()=>setCopyState(0),2000)
    } 
  }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    <div className='email'>
    <p className='email__text'>{contact.email}</p>
    <button className='email__button' onClick={copyEmail}>
    {copyState === 0 && <LucideCopy/>}
    {copyState === -1 && <MaterialSymbolsCloseRounded/>}
    {copyState === 1 && <SiCheckFill/>}
    </button>
    </div>
    </section>
  )
}

export default Contact
