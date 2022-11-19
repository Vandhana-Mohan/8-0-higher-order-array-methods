/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */


// -------------  returns the song "Pink Elephants" - one liner - uses find & Arrow function -----------------

const findPinkElephantsByTimestreet = (songs) => songs.find(search => search.title === "Pink Elephants")

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */


// -------------  returns the first song that is less than 180 seconds or 3 minutes - one liner - uses find & Arrow function -----------------

const findFirstSongUnderThreeMinutes = (songs) => songs.find(item => item.runtimeInSeconds < 180)

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */


// -------------  returns the first song that is equal to the song album. - one liner - uses find & Arrow function -----------------

const findFirstTitleTrack = (songs) => songs.find(item => item.title === item.album)

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};