class YandexMusicApi  {
    getTracks(): void {}
}

class SpotifyApi {
    getMusicByName(): void {}
}

class VKMusicApi {
    selectMusic(): void {}
}

// плохо, что в зависимости от выбранного api мы делаем те же самые манипуляции, но надо писать другой код
// вообщем зависим от реализции

const MusicApp = () => {
    const yandexApi = new YandexMusicApi();
    const spotifyApi = new SpotifyApi();
    const VKMusicAPi = new VKMusicApi();

    yandexApi.getTracks();
    spotifyApi.getMusicByName();
    VKMusicAPi.selectMusic();
}
