import LocationCard from '../components/LocationCard';

const locations = [
  {
    city: 'Mexico City',
    country: 'Mexico',
    stadium: 'Mexico City Stadium',
    image: '🇲🇽',
  },
  {
    city: 'Los Angeles',
    country: 'United States',
    stadium: 'SoFi Stadium',
    image: '🇺🇸',
  },
  {
    city: 'Toronto',
    country: 'Canada',
    stadium: 'Toronto Stadium',
    image: '🇨🇦',
  },
  {
    city: 'Miami',
    country: 'United States',
    stadium: 'Miami Stadium',
    image: '🇺🇸',
  },
  {
    city: 'New York/New Jersey',
    country: 'United States',
    stadium: 'NYNJ Stadium',
    image: '🗽',
  },
  {
    city: 'Dallas',
    country: 'United States',
    stadium: 'Dallas Stadium',
    image: '🤠',
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="badge">⚽ Virtual Community Space</p>
        <h1>World Cup 2026 Fan Space</h1>
        <p>
          Explore FIFA World Cup 2026 matches by host city and discover where
          the biggest games are happening.
        </p>
      </section>

      <section className="locations-grid">
        {locations.map((location) => (
          <LocationCard
            key={location.city}
            city={location.city}
            country={location.country}
            stadium={location.stadium}
            image={location.image}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;