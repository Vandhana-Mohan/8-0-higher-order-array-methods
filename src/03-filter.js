/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */


// -------------  returns all songs by artist "Saib" - one liner - uses filter & Arrow function -----------------

const getSongsBySaib = (songs) => songs.filter(song => song.artist === "Saib")

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */


// -------------  returns all song where runtime is over 3 minutes or 180 seconds - one liner - uses filter & Arrow function -----------------

const getSongsOverThreeMinutes = (songs) => songs.filter(time => time.runtimeInSeconds > 180)

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */


// -------------  returns all song where title is same as album - one liner - uses filter & Arrow function -----------------


const getTitleTracks = (songs) => songs.filter(song => song.title === song.album)


module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
