import React from "react";
import MidnightTimer from "./MidnightTimer";

export default function Result(props) {
    const { todaysSong, songSeconds, isSuccessfulGuess, numSkips, isSkipped, isWrong } = props;

    const seconds = songSeconds / 1000;
    const second_word = seconds === 1 ? "second" : "seconds";
    const result_description = isSuccessfulGuess ? "A virtuoso performance!" : "Unlucky!";
    const result_comment = isSuccessfulGuess
        ? `You got today's Heardle within ${seconds} ${second_word}`
        : `You didn't get today's Heardle. Better luck tomorrow!`;

    return (
        <div className="result-screen">
            <div className="result-song">
                <img
                    src={todaysSong.cover}
                    alt="result album cover"
                    width="150"
                    height="150"
                    className="result-album-cover"
                />
                <h2 className="result-song-title">{todaysSong.title}</h2>
                <p className="result-text">{todaysSong.artist}</p>
            </div>
            <h2 className="result-desc">{result_description}</h2>
            <p className="result-text result-comment">{result_comment}</p>
            <MidnightTimer />
        </div>
    );
}
