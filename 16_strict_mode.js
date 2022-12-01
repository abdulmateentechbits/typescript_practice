"use strict";
exports.__esModule = true;
var getSong = function () {
    return 'Hi';
};
var whoSangThis = getSong();
var songs = [
    { song: 'Stay with me', artist: "Alan walker" },
    { song: 'I am sorry', artist: "Akcent" },
];
var song = songs.find(function (s) { return s.song === whoSangThis; });
console.log(song === null || song === void 0 ? void 0 : song.artist);
