import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { motion, AnimatePresence } from "framer-motion"

import portrait from '../assets/asternie_portrait.jpg'; // Tell webpack this JS file uses this image

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
        <Row>
          <motion.div 
            className='projects'
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className='projectsheader'>MY PROJECTS</p>
            <Projects amount={9}/>
          </motion.div>
        </Row>
      </Container>
    );
  }

function ProjectIcon({ order }) {
  return(
    <motion.div
      className='projecticon'
      variants={variants}
    >
      <motion.div 
        className='projectbg'
        whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
      >
        <p>PROJECT NAME {order}</p>
      </motion.div>
    </motion.div>
  )
}

function Projects({ amount })
{
  const rows = [];
  for (let i = 0; i < amount; i++) {
      rows.push(<ProjectIcon key={i} order={i}/>);
  }
  return rows;
}