import React from 'react';
import axios from 'axios';

import StarWarsCard from './StarWarsCard';

const StarWarsList = () => {
  const [planets, setPlanets] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  React.useEffect(() => {
    const swapi = async () => {
      const { data } = await axios.get('https://swapi.dev/api/planets');
      setPlanets(data.results);
    };

    try {
      swapi();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increase Counter</button>
        <button onClick={decrement}>Decrease Counter</button>
      </div>
      <hr />
      {planets.map((planet) => {
        return (
          <StarWarsCard
            name={planet.name}
            climate={planet.climate}
            population={planet.population}
            terrain={planet.terrain}
            key={planet.name}
          />
        );
      })}
    </div>
  );
};

export default StarWarsList;
