import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    const [todaysSong, setTodaysSong] = React.useState({});

    const songs = [
        {
            title: "Song 1",
            artist: "Artist 1",
            url: "https://raw.githubusercontent.com/rishabhRsinghvi/Bollywood-Heardle/main/songs/song1.mp3",
            cover: "https://raw.githubusercontent.com/rishabhRsinghvi/Bollywood-Heardle/main/covers/cover1.jpg"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            url: "https://raw.githubusercontent.com/rishabhRsinghvi/Bollywood-Heardle/main/songs/song2.mp3",
            cover: "https://raw.githubusercontent.com/rishabhRsinghvi/Bollywood-Heardle/main/covers/cover2.jpg"
        },
        // Add more songs as needed
    ];

    React.useEffect(() => {
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        setTodaysSong(randomSong);
    }, []);

    return (
        <div>
            <Header />
            <Game todaysSong={todaysSong} />
            <footer></footer>
        </div>
    );
}
