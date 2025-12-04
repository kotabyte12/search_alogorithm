//<--- Search for Artist name & Artist song name Algorithm --->//

import * as data from "./data.json";

interface SongData {
    a: string;
    s: string;
    i: string;
    u: string; // audio
    t: string[];
    ma: string;
    f: string[];
}

const search = (datas: SongData[])=> {
    for (const data of datas) {
        const artist_name = data.a;
        const song_title = data.s;

        //<--- Search for artist_name --->//
        const targetString_a = artist_name;
        let input_a = "헤";
        if (targetString_a.indexOf(input_a) !== -1) {
            console.log("검색 결과:", targetString_a);
        }

        //<--- Search for song_title --->//
        const targetString_s = song_title;
        let input_s = "그";
        if (targetString_s.indexOf(input_s) !== -1) {
            console.log("검색 결과:", targetString_s);
        }
    }
}

search(data);