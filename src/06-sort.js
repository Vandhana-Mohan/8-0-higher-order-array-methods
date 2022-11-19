/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
  */
  const exampleSongData = require("../data/songs");
  // Do not change the line above.

  /**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */


  // -------------  sorts array ascending - one liner - uses sort & Arrow function -----------------
  // a,b => a - b == sorts in ascending order

  const sortByRuntimeAscending = (songs) => songs.sort((a,b) => a.runtimeInSeconds - b. runtimeInSeconds)


  /**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */


 // -------------  sorts artist name in descending - one liner - uses sort & Arrow function -----------------
 // b.toLowerCase() - a.toLowerCase() ? 1 : -1 == converts all string to lowercase and then compares. If value is greater, then 1, that means its sorted in descending order
 // we can also use .LocaleCompare() which i have used for next question

 const sortByArtistNameDescending = (songs) => songs.sort( (a, b) => b.artist.toLowerCase() > a.artist.toLowerCase() ? 1 : -1 )


/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */



 // -------------  sorts song title in ascending - one liner - uses sort & Arrow function -----------------
 // Here we use .LocaleCompare() which compares ASCII value before sorting. - localeCompare is mainly used for non english characters
 // Used an alternative for previous function to show variation - both method works

 const sortBySongTitleAscending = (songs) => songs.sort((a, b) => a.title.localeCompare(b.title))

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
