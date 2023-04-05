import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root, { 
  loader as rootLoader,
  action as rootAction,
 } from "./routes/root";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Contact, {
  loader as contactLoader,
} from "./routes/contact"; /* Placeholder content */
import EditContact, {
  action as editAction,
} from "./routes/edit";
import DeleteContact, {
  action as deleteAction,
} from "./routes/delete";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader, /* READS: provides data to the route element before it renders. */
    action: rootAction, /* WRITES: Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") */
    children: [
      {
        errorElement: <ErrorPage />,
        children: [ /* This nests other pages within the root layout */
        {
            index: true, /* instead of a path, this renders when the user is at the parent route's exact path */
            element: <Index/>,
        },
        {
            path: "contacts/:contactId",
            element: <Contact/>,
            loader: contactLoader,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader, /* You might note we reused the contactLoader for this route. This is only because we're being lazy in the tutorial. There is no reason to attempt to share loaders among routes, they usually have their own. */
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            element: <DeleteContact />,
            loader: contactLoader,
            action: deleteAction,
          }
        ]
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This is the "root route" where the rest of the routes will render.
    It serves at the root layout of the UI where other routes will nest. */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
