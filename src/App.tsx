import ContactItem from './components/ContactItem/ContactItem';
import SkillTile from './components/SkillTile/SkillTile';
import { useState, useRef, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import ProjectCarousel from './components/ProjectCarousel/ProjectCarousel';
import './App.css'

function App() {

  const [classes, setClasses] = useState('hide about-textcont');
  const [isMobileView, setMobileView] = useState(false);
  const [isMediumSize, setMediumSize] = useState(false);

  const observerRefs = useRef<Element[]>([]);

  // Manage onScroll animation
  const changeClass = () => {
      if (window.scrollY >= 520) {
        setClasses('about-textcont animate__animated animate__fadeInLeft');
      }
  }

  window.addEventListener('scroll', changeClass);

  // Handle window-resize to achieve responsive navbar
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 450);
      setMediumSize(window.innerWidth <= 1045);
    };
  
    // Initial check for mobile view
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavBar observerRefs={observerRefs} />
      <header id='Home' className='welcome-cont'>
        {isMobileView ? (
        // Change the number of paragraphs based on screen size to make animation work
          <div className='typing-demo-cont'>
            <p className='typing-demo-mobile-1' ref={(el) => el && (observerRefs.current[0] = el)}>Hello! My name is</p>           
            <p className='typing-demo-mobile-2'><strong className='name'>Daniel Kobliha</strong></p> 
            <p className='typing-demo-mobile-3'>and I'm a young and</p>           
            <p className='typing-demo-mobile-4'>aspiring web developer!</p>           
          </div>
         ) : isMediumSize ? (
          <div className='typing-demo-cont'>
           <p className='typing-demo-medium-1' ref={(el) => el && (observerRefs.current[0] = el)}>Hello! My name is <strong className='name'>Daniel Kobliha</strong> and</p>           
           <p className='typing-demo-medium-2'>I'm a young and aspiring web developer!</p>           
          </div>
          ) : (             
          <p className='typing-demo-big' ref={(el) => el && (observerRefs.current[0] = el)}>Hello! My name is <strong className='name'>Daniel Kobliha</strong> and I'm a young and aspiring web developer!</p>           
         )
        }
      </header>
      <article id='About' className='about-cont'>
        <div className={classes} ref={(el) => el && (observerRefs.current[1] = el)}>
          <p className='about-text'>I'm a 22 years old human being born and raised in Czechia, Zlín with a bachelor's degree in Economics and a C2 English certificate. I have been self-learning programming for over 4 years and have discovered a burning passion for it, which is why I am an economist-turned-programmer. Throughout my self-learning journey I have acquired several front-end and back-end skills which I have applied in my personal projects, such as this portfolio.</p>
          <p className='about-text'>My hobbies include creating music, learning languages, programming and gaming, among other activities. I consider myself a creative person that has a thirst for knowledge. I love creating and learning new things and undertaking new challenges!</p>
        </div>
        <figure>
          <img className='me' src='src/assets/sexy_man.png' alt='a picture of me' />
        </figure>
      </article>
      <article id='Tech-stack' className='skills-cont'>
        <h2 className='skills-header'>My tech stack</h2>
        <div className='skills' ref={(el) => el && (observerRefs.current[2] = el)}>
          <SkillTile skillName={'JavaScript'} srcPath={'src/assets/skills/Unofficial_JavaScript_logo_2.svg'} alt={'JavaScript logo'} />
          <SkillTile skillName={'HTML'} srcPath={'src/assets/skills/HTML5 Logo.svg'} alt={'HTML logo'} />
          <SkillTile skillName={'CSS'} srcPath={'src/assets/skills/CSS3_logo_and_wordmark.svg'} alt={'CSS logo'} />
          <SkillTile skillName={'Sass'} srcPath={'src/assets/skills/Sass_Logo_Color.svg'} alt={'Sass logo'} />
          <SkillTile skillName={'Bootstrap'} srcPath={'src/assets/skills/Bootstrap_logo.svg'} alt={'Bootstrap logo'} />
          <SkillTile skillName={'React'} srcPath={'src/assets/skills/react.svg'} alt={'React logo'} />
          <SkillTile skillName={'Node JS'} srcPath={'src/assets/skills/icons8-node-js-240.png'} alt={'Node JS logo'} />
          <SkillTile skillName={'Express JS'} srcPath={'src/assets/skills/icons8-express-js.svg'} alt={'Express JS logo'} />
          <SkillTile skillName={'TypeScript'} srcPath={'src/assets/skills/Typescript_logo_2020.svg'} alt={'TypeScript logo'} />
          <SkillTile skillName={'MongoDB'} srcPath={'src/assets/skills/icons8-mongodb-240.png'} alt={'MongoDB logo'} />
          <SkillTile skillName={'Mongoose'} srcPath={'src/assets/skills/icons8-mongoose-240.png'} alt={'Mongoose logo'} />
          <SkillTile skillName={'Pug'} srcPath={'src/assets/skills/pugjs.svg'} alt={'PugJS logo'} />
        </div>
      </article>
      <article id='Projects' className='projects-cont'>
        <h2 className='projects-header' ref={(el) => el && (observerRefs.current[3] = el)}>My projects</h2>
        <div className='carousel'>
          <ProjectCarousel />
        </div>
      </article>
      <footer id='Contact'>
        <h2 className='contact-title'>You can reach or check me out here</h2>
        <div className='contactItems-cont' ref={(el) => el && (observerRefs.current[4] = el)}>
          <ContactItem srcPath={'src/assets/contacts/icons8-mail.svg'} text={'daniel.kobliha@gmail.com'} />
          <ContactItem srcPath={'src/assets/contacts/icons8-phone.svg'} text={'+420 777 799 991'} />
          <ContactItem srcPath={'src/assets/contacts/icons8-linkedin.svg'} text={'Daniel Kobliha'} link={'https://www.linkedin.com/in/daniel-kobliha-453981285/'}/>
          <ContactItem srcPath={'src/assets/contacts/icons8-github.svg'} text={'JohnJohnCode'} link={'https://github.com/johnjohncode'} />
        </div>
      </footer>
    </>
  )
}

export default App
