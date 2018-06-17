/// <reference path="./howler/howler.min.js"/>

var music = new Howl({
    src: ['./audio/background_music.mp3'],
    loop: true
});
var winMusic = new Howl({
    src: ['./audio/win_music.mp3'],
    loop: false
});
var explosion = new Howl({
    src: ['./audio/explosion.mp3'],
    volume: 1,
    loop: false
});  
var phaserFire = new Howl({
    src: ['./audio/phaser_fire.mp3'],
    volume: 0.2,
    loop: false
});
var allShesGot = new Howl({
    src: ['./audio/all_shes_got.mp3'],
    volume: 1,
    loop: false
});
var engage = new Howl({
    src: ['./audio/engage.wav'],
    volume: 0.3,
    loop: false
});