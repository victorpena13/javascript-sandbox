const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if(records[id].hasOwnProperty(prop)){
        records[id].prop = value;
    }
    if(records[id].hasOwnProperty(prop) === false) {
        records[id][prop] = value;
    }
    if(prop === "tracks" && records[id].hasOwnProperty(prop)){
        records[id].tracks.push(value);
    }

    if(records[id].hasOwnProperty("prop")) {
        delete records[id].prop;
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection,1245,'tracks', 'Addicted to Love'));
// console.log(updateRecords(recordCollection,1245,'tracks', 'Every Kinda People'));


// notes: use .map to iterate through object properties to determine if the value is empty and then delete that property.