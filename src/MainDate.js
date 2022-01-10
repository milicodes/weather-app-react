import React from "react";

export default function MainDate(promps) {
    let Days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = Days[promps.date.getDay()];
    let hours = promps.date.getHours();
    let minutes = promps.date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return <div>
        <h5>{day} {hours}:{minutes}</h5>
    </div>
}