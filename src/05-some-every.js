/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */


// -------------  returns true if every song is over 2 mins or 120 seconds - one liner - uses every & Arrow function -----------------

const allSongsAreOverTwoMinutes = (songs) => songs.every(item => item.runtimeInSeconds > 120)


/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */


// -------------  returns true if any song is over 4 mins or 240 seconds - one liner - uses some & Arrow function -----------------


const anySongIsOverFourMinutes = (songs) => songs.some(item => item.runtimeInSeconds > 240)



/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */


// -------------  returns true if any song is by the artist "Peanut" - one liner - uses some & Arrow function -----------------


const anySongIsByPeanut = (songs) => songs.some(item => item.artist === "Peanut")

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
