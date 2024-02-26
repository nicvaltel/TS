"use strict";
const audioCtx = new AudioContext();
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");
var gainNode;
if (audioElement instanceof HTMLAudioElement && playBtn instanceof HTMLButtonElement && volumeSlider instanceof Element) {
    const audioSource = audioCtx.createMediaElementSource(audioElement);
    playBtn.addEventListener("click", () => {
        if (audioCtx.state === "suspended") {
            audioCtx.resume();
        }
        if (playBtn.getAttribute("class") === "paused") {
            audioElement.play();
            playBtn.setAttribute("class", "playing");
            playBtn.textContent = "Pause";
        }
        else if (playBtn.getAttribute("class") === "playing") {
            audioElement.pause();
            playBtn.setAttribute("class", "paused");
            playBtn.textContent = "Play";
        }
    });
    audioElement.addEventListener("ended", () => {
        playBtn.setAttribute("class", "paused");
        playBtn.textContent = "Play";
    });
    gainNode = audioCtx.createGain();
    // volumeSlider.addEventListener("input", () => {
    //     gainNode.gain.value = volumeSlider.value;
    // });
    audioSource.connect(gainNode).connect(audioCtx.destination);
}
else {
    console.log("ERROR audioElement is null");
}
const em = document.createElement("em");
const para = document.querySelector("p");
em.textContent = "Salam!@";
para === null || para === void 0 ? void 0 : para.appendChild(em);
const canvas = document.querySelector("canvas");
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
// ctx.fillStyle = this.color;
ctx === null || ctx === void 0 ? void 0 : ctx.arc(100, 200, 50, 0, 2 * Math.PI);
ctx === null || ctx === void 0 ? void 0 : ctx.fill();
function getSliderValue(value) {
    gainNode.gain.value = value;
}
