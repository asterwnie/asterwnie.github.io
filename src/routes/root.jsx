import { 
    Outlet, /* Outlet tells the root route where to render child routes using <Outlet> */
    NavLink, /* Link replaces ahref to Links using React Router */
    useLoaderData,
    Form, /* Form allows us to do clientside routing for GET and POST*/
    redirect,
    useNavigation, /* lets us add some user feedback while pages load (global pending UI) */
 } from "react-router-dom"; 

 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 
 import { getContacts, createContact } from "../contacts";
import { Button } from "bootstrap";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
} 

export default function Root() {
    /* const { contacts } = useLoaderData(); */
    const navigation = useNavigation();

    return (
      <>
        <div className="undernav"></div>
        <div className="darkercircle"></div>
        <div className="circles1">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
        </div>
        <div className="circles2">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
        </div>
        <Navbar id="navbar">
            <Nav id="header">
                <Nav.Link>
                  <NavLink to="/" className="headerbutton">ABOUT</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/" className="headerbutton">PROJECTS</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/" className="headerbutton">RESUME</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/" className="headerbutton">CONTACT</NavLink>
                </Nav.Link>
              </Nav>
        </Navbar>
        <div class="horizontalspacer"></div>
        <div class="wave">
          <svg viewBox="0 70 500 60" preserveAspectRatio="none">
            <rect x="0" y="0" width="500" height="500" style={{stroke:'none'}} />
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke:'none'}}></path>
          </svg>
        </div>
        <div id="outlet">
          <Outlet />
        </div>
        <footer>
          <svg id="bottomwave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" preserveAspectRatio="none">
            <path
              d="M0,300c0,0,300,0,300,0s0-201,0-201-46-13-68,0-30,40-41,49c-6,4-34,4-44,9s-19,21-26,24c-15,5-58,12-75,30s-42,87-42,87" fill="#efa6b6"/>
          </svg>
          <div className="circles3">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
          </div>
          <p>© DESIGNED AND BUILT WITH LOVE BY ASTER NIE</p>
        </footer>
      </>
    );
  }