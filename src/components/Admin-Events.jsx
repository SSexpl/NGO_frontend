import React from "react";
import { useEffect, useState } from "react";
//require('dotenv').config();
export const All_Events = () => {

  const apiBaseUrl = process.env.REACT_APP_API_KEY || "https://ngo-backend-zv1a.onrender.com";
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeEvent, setActiveEvent] = useState(null);

  const getEvents = async () => {
    console.log("started getEvents");
    try {
      let Fetched = await fetch(`${apiBaseUrl}/admin/get-events-registered`);
      let Event_result = await Fetched.json();
      setEvents(Event_result); // convert the response send to a particular json type as data travels as string accros the network
      setLoading(false);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => { getEvents() }, []);

  if (loading) {
    return (<h1>Loading.........</h1>)
  }
  // const eventDataList = [
  //     {
  //       eventName: 'Event 1',
  //       registeredPeople: [
  //         { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  //         { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  //       ],
  //     },
  //     {
  //       eventName: 'Event 2',
  //       registeredPeople: [
  //         { name: 'Alice Johnson', email: 'alice@example.com', phone: '111-222-3333' },
  //         { name: 'Bob Brown', email: 'bob@example.com', phone: '444-555-6666' },
  //       ],
  //     },
  //     // Add more event data here
  //   ];


  const toggleEventDetails = (eventIndex) => {
    if (activeEvent === eventIndex) {
      setActiveEvent(null);
    } else {
      setActiveEvent(eventIndex);
    }
  };

  return (
    <div className="p-4">
      {events.map((event, index) => (
        <div key={index}>
          <div
            className="bg-slate-800 text-white px-4 py-2 my-5 cursor-pointer flex justify-between"
            onClick={() => toggleEventDetails(index)}
          >
            <div>
              Event: {event.event_name}
            </div>
            <div>
              Date:{event.event_date}
            </div>
          </div>
          {activeEvent === index && (
            <div className="mt-4">
              <table className="table-auto w-full border">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {event.registered.map((person, personIndex) => (
                    <tr key={personIndex}>
                      <td className="border px-4 py-2">{person.user_name}</td>
                      <td className="border px-4 py-2">{person.user_email}</td>
                      <td className="border px-4 py-2">{person.user_phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>


  )
}
