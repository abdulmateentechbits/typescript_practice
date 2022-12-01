export {}

const getSong = ()=>{
    return 'Hi';
}
let whoSangThis:string = getSong();


const songs = [
    {song:'Stay with me',artist:"Alan walker"},
    {song:'I am sorry',artist:"Akcent"},
];

const song = songs.find((s)=>s.song === whoSangThis);
console.log(song?.artist);
 