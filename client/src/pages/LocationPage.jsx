import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function LocationPage() {
  const { locationName } = useParams();
  const decodedLocation = decodeURIComponent(locationName);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/events/${decodedLocation}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, [decodedLocation]);

  return (
    <main className="location-page">
      <Link to="/" className="back-link">← Back to cities</Link>

      <section className="location-header">
        <p className="badge">🏟️ Host City</p>
        <h1>{decodedLocation} Matches</h1>
        <p>View all World Cup 2026 events connected to this location.</p>
      </section>

      {loading ? (
        <p className="loading">Loading matches...</p>
      ) : events.length === 0 ? (
        <p className="loading">No matches found for this city.</p>
      ) : (
        <section className="events-list">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div>
                <p className="group-name">{event.group_name}</p>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>

              <div className="event-details">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Stadium:</strong> {event.stadium}</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default LocationPage;