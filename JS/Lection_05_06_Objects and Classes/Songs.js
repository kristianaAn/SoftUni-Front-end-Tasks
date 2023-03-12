function findSongs(inputArr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songsInList = [...inputArr];
  let numOfSongs = songsInList[0];
  let listType = songsInList[songsInList.length - 1];
  let songs = songsInList.slice(1, songsInList.length - 1);

  for (let song of songs) {
    let [playlist, songName, songTime] = song.split("_");

    if (playlist === listType && playlist !== "all") {
      console.log(songName);
    } else if (listType === "all") {
      console.log(songName);
    }
  }
}

findSongs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

findSongs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);

findSongs([2, 
    'like_Replay_3:15', 
    'ban_Photoshop_3:48', 
    'all']);
