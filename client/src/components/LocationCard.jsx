import { Link } from 'react-router-dom';

function LocationCard({ city, country, stadium, image }) {
  return (
    <Link to={`/location/${encodeURIComponent(city)}`} className="location-card">
      <div className="card-image">{image}</div>
      <h2>{city}</h2>
      <p>{country}</p>
      <span>{stadium}</span>
    </Link>
  );
}

export default LocationCard;