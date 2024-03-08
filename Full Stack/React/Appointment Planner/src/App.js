import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contact, setContact] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function addContact(name, phone, email) {
    let newContact = {
      name: name,
      phone: phone,
      email: email,
    };
    setContact([...contact, newContact]);
  }

  function addAppointment(name, contact, date, time) {
    let newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments([...appointments, newAppointment]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              render={() => (
                <ContactsPage contacts={contact} addContact={addContact} />
              )}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              render={() => (
                <AppointmentsPage
                  appointments={appointments}
                  contacts={contact}
                  addAppointment={addAppointment}
                />
              )}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />;
      <ContactsPage contacts={contact} addContact={addContact} />
      <AppointmentsPage
        appointments={appointments}
        contacts={contact}
        addAppointment={addAppointment}
      />
    </>
  );
}

export default App;
