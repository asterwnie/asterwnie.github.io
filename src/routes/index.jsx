import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { motion, AnimatePresence } from "framer-motion"

import portrait from '../assets/asternie_portrait.jpg'; // Tell webpack this JS file uses this image
import molementum_icon from '../assets/Molementum_Square.png';
import personal_projects_icon from '../assets/Misc_Personal_Projects.png';
import maneki_icon from '../assets/maneki_icon.png';

const variants = {
  hidden: { opacity: 0, scale: 0 },
  hover: { scale: 1.05, transition: { duration: 0.2 }},
  visible: {
      scale: 1, 
      opacity: 1,
      transition: {
        duration: .4,
        type: "spring",
        bounce: .4
      }
    }
}

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.2,
      }
    }
}

export default function Index() {
    return (
      <Container id="index">
        <Row>
          <Col xs={12} md={4} lg={3} class="portraitcontainer">
            <Image 
              roundedCircle 
              src={portrait} 
              alt="Portrait of Aster Nie."
              className="myportrait"
              fluid
              >
            </Image>
          </Col>
          <Col xs lg="auto">
            <div className="mydescription">
              <h4>HI, I'M</h4>
              <h1>ASTER NIE!</h1>
              <h3>Programmer, Web Developer, & Artist</h3>
              <motion.p
                whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              >
                Download my CV {'>'}
              </motion.p>
            </div>
          </Col>
        </Row>
        <Row className='sectionrow'>
          <motion.div 
            className='projects'
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className='sectionheader'>MY PROJECTS</p>
            <Projects amount={3}/>
          </motion.div>
        </Row>
        <Row className='sectionrow'>
          <motion.div 
            className='projects'
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className='sectionheader'>ABOUT ME</p>
            <div className='aboutme'>
              I'm a multidisciplinary Systems Programmer with an affinity for interactive storytelling. Creating great game feel and user experiences are my specialties. My goal is to make experiences that have social impact - I believe games have a unique role in creating a better world. In my spare time, I'm immersed in botany and medicinal herbs. Nature is always my biggest inspiration!
              <br/><br/>
              <b>Professional Qualifications</b>
              <ul>
                <li>Systems Programming</li>
                <li>Physics Programming</li>
                <li>Tools Development</li>
                <li>UI/UX</li>
                <li>Interactive Web Development</li>
                <li>Technical Documentation</li>
              </ul>

              <b>Technical Expertise</b>
              <ul>
                <li>Unity 3D (proficient)</li>
                <li>C# (proficient)</li>
                <li>C++ (proficient)</li>
                <li>Javascript (proficient)</li>
                <li>ReactJS (proficient)</li>
                <li>.NET (foundational)</li>
                <li>Autodesk Maya (foundational)</li>
                <li>Unreal Engine (foundational)</li>
              </ul>
            </div>
          </motion.div>
        </Row>
      </Container>
    );
  }

function ProjectIcon({ title, subtitle, img }) {
  return(
    <motion.div
      className='projecticon'
      variants={variants}
    >
      <motion.div 
        className='projectbg'
        whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
      >
        <Image 
            className='projectbg'
            src={img} 
            alt={title}
            fluid
            />
        <p className="projecttitle">
        <div className="projecttitletext">
          <b>{title}</b>
          <span style={{fontSize: 16}}>{subtitle}</span>
        </div>
          
        </p>
      </motion.div>
    </motion.div>
  )
}

function Projects()
{
  const rows = [];
  rows.push(
    <ProjectIcon key={1} title="Molementum" subtitle="Wishlist now on Steam!" img={molementum_icon}/>
  );
  rows.push(
    <ProjectIcon key={1} title="Personal Projects" subtitle="A link to my itch projects and devlogs!" img={personal_projects_icon}/>
  );
  rows.push(
    <ProjectIcon key={1} title="Maneki & the Firefly Spell" subtitle="A Rad Studio summer project" img={maneki_icon}/>
  );
  return rows;
}