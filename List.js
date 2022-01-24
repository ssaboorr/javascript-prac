const List = () => {
  const movies = [
    { id: 'mov1', value: 'The Last Samurai' },
    { id: 'mov2', value: 'Van Helsing' },
    { id: 'mov3', value: 'Braveheart' },
    { id: 'mov4', value: 'A Few Good Men' },
    { id: 'mov4', value: 'Star Wars: Episode III - Revenge of the Sith' },
  ];

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.value}</li>
      ))}
    </ul>
  );
};

export default List;
