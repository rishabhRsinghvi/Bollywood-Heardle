import React from 'react';
import Game from './components/Game';    // Correct path for Game
import Result from './components/Result'; // Correct path for Result

function App() {
  const [songs, setSongs] = React.useState([]);
  const [todaysSong, setTodaysSong] = React.useState(null);
  const [isGameOver, setIsGameOver] = React.useState(false);

  // Function to fetch songs (or set up your logic to get songs)
  const fetchSongs = () => {
    // Replace this with your actual logic to fetch the songs
    const fetchedSongs = [
      // Example song objects
      { title_short: "Gallan Goodiyan", artist: { name: "YASHITA SHARMA, MANISH KUMAR TIPU, FARHAN AKHTAR, SHANKAR MAHADEVAN, SUKHWINDER SINGH" }, preview: "/path/to/song1.mp3" },
      { title_short: "Tere Bina", artist: { name: "AR Rahman" }, preview: "/path/to/song2.mp3" }
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
