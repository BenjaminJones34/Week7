const fs = require("fs");
const path = require("path");
const { nanoid, customAlphabet } = require("nanoid");
const dataPath = path.join(process.env.DATA_LOCATION, "data.json");

function saveData(data) {
    try {
        if (!fs.existsSync(process.env.DATA_LOCATION)) {
            fs.mkdirSync(process.env.DATA_LOCATION);
        }
        
        fs.writeFileSync(dataPath, JSON.stringify(data));
    } catch(error) {
        console.log(error);
    }
};

function loadData() {
    try {
        return JSON.parse(fs.readFileSync(dataPath).toString());
    } catch(error) {
        return [];
    }
};

function makeId() {
    return customAlphabet(process.env.CHARACTERS, parseInt(process.env.LENGTH))();
};

function add(title, artist, album, id = false) {
    saveData([...loadData(), {id : id || makeId(), title, artist, album}]);
};

function list() {
    console.log(loadData());
};

function update(id, title, artist, album) {
    const song = remove(id);
    add(title || song.title, artist || song.artist, album || song.album, id);
};

function remove(id) {
    const songs = loadData();
    const song = songs.find((song) => song.id === id);
    const matchSong = (song) => song.id !== id;
    saveData(songs.filter(matchSong));
    return song;
};

module.exports = {add, update, list, remove};