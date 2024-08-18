import React from 'react';
import Game from './Game'; // Assuming Game is another component
import Result from './Result'; // Assuming Result is another component

function App() {
  const [songs, setSongs] = React.useState([]);
  const [todaysSong, setTodaysSong] = React.useState(null);
  const [isGameOver, setIsGameOver] = React.useState(false);

  // Function to fetch songs (or set up your logic to get songs)
  const fetchSongs = () => {
    // Replace this with your actual logic to fetch the songs
    const fetchedSongs = [
      // Example song objects
      { title_short: "Song 1", artist: { name: "Artist 1" }, preview: "/path/to/song1.mp3" },
      { title_short: "Song 2", artist: { name: "Artist 2" }, preview: "/path/to/song2.mp3" }
    ];
    setSongs(fetchedSongs);

    // Set today's song (you can update the logic to select a specific song)
    setTodaysSong(fetchedSongs[0]);
  };

  // UseEffect hook to fetch songs or perform other effects
  React.useEffect(() => {
    fetchSongs();
    // Added 'songs' as a dependency. If not needed, you can remove it.
  }, [songs]);

  // Render Game component if the game is not over, otherwise render Result
  return (
    <div className="App">
      {!isGameOver ? (
        <Game 
          todaysSong={todaysSong} 
          setIsGameOver={setIsGameOver}
        />
      ) : (
        <Result todaysSong={todaysSong} />
      )}
    </div>
  );
}

export default App;
