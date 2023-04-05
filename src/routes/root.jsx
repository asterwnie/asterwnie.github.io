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
        
      </>
    );
  }