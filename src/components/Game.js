import React from "react";
import Result from "./Result";
import skippedImg from "../assets/skipped.png";
import wrongImg from "../assets/wrong.png";

export default function Game(props) {
    const [songSeconds, setSongSeconds] = React.useState(1000);
    const [numSkips, setNumSkips] = React.useState(0);
    const [isSkipped, setIsSkipped] = React.useState([false, false, false, false, false, false]);
    const [isWrong, setIsWrong] = React.useState([false, false, false, false, false, false]);
    const [isGameOver, setIsGameOver] = React.useState(false);
    const [isSuccessfulGuess, setIsSuccessfulGuess] = React.useState(false);
    const [selectedSong, setSelectedSong] = React.useState("");

    // Initialize audio object for the selected song
    const song = React.useMemo(() => new Audio(props.todaysSong.url), [props.todaysSong.url]);
    const interval = React.useRef(null);

    React.useEffect(() => {
        return () => {
            // Cleanup song on component unmount
            song.pause();
            song.currentTime = 0;
        };
    }, [song]);

    function previewSong() {
        song.currentTime = 0;  // Restart the song from the beginning
        song.play();  // Play the song
        interval.current = setInterval(() => {
            setSongSeconds((prev) => prev + 1000); // Increment the song preview time
        }, 1000);  // Update every second

        // Stop the song after the allowed preview time
        setTimeout(() => {
            song.pause();
            clearInterval(interval.current);  // Stop incrementing
        }, songSeconds);  // songSeconds determines the preview duration
    }

    function handleSkip() {
        if (numSkips < 5) {
            const newSkips = [...isSkipped];
            newSkips[numSkips] = true;  // Mark the current round as skipped
            setIsSkipped(newSkips);

            setNumSkips((prev) => prev + 1);
            setSongSeconds((prev) => prev + 1000);  // Extend preview time
            previewSong();  // Preview more of the song
        } else {
            setIsGameOver(true);  // If all skips are used, game over
        }
    }

    function handleSubmit(guess) {
        if (guess === props.todaysSong.title) {
            setIsSuccessfulGuess(true);
            setIsGameOver(true);
        } else {
            const newWrong = [...isWrong];
            newWrong[numSkips] = true;  // Mark the current round as a wrong guess
            setIsWrong(newWrong);

            if (numSkips < 5) {
                handleSkip();  // Automatically skip to the next round if wrong
            } else {
                setIsGameOver(true);  // Game over after the final wrong guess
            }
        }
    }

    return (
        !isGameOver ? (
            <div className="game-container">
                <div className="song-preview">
                    {/* Add the preview button to allow listening to the snippet */}
                    <button onClick={previewSong}>Preview Song</button>
                </div>

                <div className="guess-input">
                    {/* Allow the player to input their guess */}
                    <input 
                        type="text" 
                        placeholder="Guess the song..." 
                        value={selectedSong} 
                        onChange={(e) => setSelectedSong(e.target.value)}
                    />
                    <button onClick={() => handleSubmit(selectedSong)}>Submit</button>
                </div>

                <div className="skips">
                    {isSkipped.map((skipped, idx) => (
                        <img 
                            key={idx} 
                            src={skipped ? skippedImg : wrongImg} 
                            alt={skipped ? "Skipped" : "Wrong"} 
                            className="skip-indicator"
                        />
                    ))}
                </div>

                <button onClick={handleSkip}>Skip</button>
            </div>
        ) : (
            <Result 
                todaysSong={props.todaysSong} 
                songSeconds={songSeconds} 
                isSuccessfulGuess={isSuccessfulGuess} 
                numSkips={numSkips}
                isSkipped={isSkipped}
                isWrong={isWrong}
            />
        )
    );
}
