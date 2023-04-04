import { 
    Outlet, /* Outlet tells the root route where to render child routes using <Outlet> */
    NavLink, /* Link replaces ahref to Links using React Router */
    useLoaderData,
    Form, /* Form allows us to do clientside routing for GET and POST*/
    redirect,
    useNavigation, /* lets us add some user feedback while pages load (global pending UI) */
 } from "react-router-dom"; 

import { getContacts, createContact } from "../contacts";

export async function action() {
    const contact = await createContact();
    /* return { contact }; */
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export default function Root() {
    const { contacts } = useLoaderData();
    const navigation = useNavigation();

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            
            {/* If contacts are found, make new list elements 
                else, show "No contacts"*/}

            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (

                        
                        <NavLink 
                            to={`contacts/${contact.id}`}
                            className={({ isActive, isPending}) =>
                                isActive ? "active"
                                : isPending ? "pending"
                                : ""
                                }
                            > {/* when the user is at the url in NavLink, then isActive will be true. when it is loading, it uses isPending */}
                            
                            {contact.first || contact.last ? (
                                <>
                                    {contact.first} {contact.last}
                                </>
                            ) : (
                                <i>No Name</i>
                            )}{" "}
                            {contact.favorite && <span>★</span>}
                        
                        </NavLink>
                    ))}
                </ul>
            ) : (
                <p>
                    <i>No contacts</i>
                </p>
            )}

          </nav>
        </div>
        <div 
            id="detail"
            className={
                navigation.state === "loading" ? "loading" : ""
            }
        >
            <Outlet />
        </div>
      </>
    );
  }