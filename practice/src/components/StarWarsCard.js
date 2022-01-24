const StarWarsCard = ({ name, climate, population, terrain }) => {
  return (
    <div>
      <h2>
        <strong>{name}</strong>
      </h2>
      <p>Climate: {climate}</p>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
    </div>
  );
};

export default StarWarsCard;
