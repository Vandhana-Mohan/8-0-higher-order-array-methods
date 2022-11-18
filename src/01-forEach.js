/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */


//---------logs out song titles - one liner - uses forEach & Arrow function --------------

const printAllSongTitles = (songs) => songs.forEach(item => console.log(item.title)) 

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */

// -------------  logs out title & artist - one liner - uses forEach & Arrow function -----------------

const printSongDetails = (songs) => songs.forEach(item => console.log(`${item.title} by ${item.artist}`)) 

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */

// -------------------- logs out song titles over 180 seconds (3 minutes) - one liner - uses forEach & Arrow function -------------------------

const printSongTitlesOverThreeMinutes = (songs) => songs.forEach( item => item.runtimeInSeconds > 180 ? console.log(item.title) : console.log("Invalid") )

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
