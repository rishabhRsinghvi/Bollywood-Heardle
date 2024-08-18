import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    const [todaysSong, setTodaysSong] = React.useState({});

    const songs = [
        {
            title: "GALLAN GOODIYAAN",
            artist: "YASHITA SHARMA, MANISH KUMAR TIPU, FARHAN AKHTAR, SHANKAR MAHADEVAN, SUKHWINDER SINGH",
            url: "https://raw.githubusercontent.com/rishabhRsinghvi/Bollywood-Heardle/main/songs/song1.mp3",
            cover: "https://raw.githubusercontent.com/rishabhRsinghvi/Bollywood-Heardle/main/covers/cover1.jpg"
        },
        {
            title: "Tere Bin",
            artist: "AR Rahman",
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
