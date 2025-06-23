import { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([
    {id: 1, title: "Event 1", description: "Description 1"},
    {id: 2, title: "Event 2", description: "Description 2"},
    {id: 3, title: "Event 3", description: "Description 3"},
  ]);

  console.log(events);

  useEffect(() => {
    fetch('http://localhost:5173/api/events')
    .then((response) => response.json())
    .then((data) => {
      setEvents(data.results);
    })
    .catch((err) => {
      console.log(err);
     });
    }, []);

    

  return <div>EventsList:
    {events.map((event) => {
      return <div key={event.id}>
        <p>Title: {event.title}</p>
        <p>Title: {event.description}</p>
      </div>
    })}
  </div>;
}
export default Events