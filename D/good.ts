interface MusicApi {
    getTracks: () => void;
}

class YandexMusicApi implements MusicApi {
    getTracks(): void {}
}

class SpotifyApi implements MusicApi {
    getMusicByName(): void {}

    getTracks(): void {
        this.getMusicByName()
    }
}

class VKMusicApi implements MusicApi {
    selectMusic(): void {}

    getTracks(): void {
        this.selectMusic();
    }
}

class MusicClient implements MusicApi {
    client: MusicApi;

    constructor(client: MusicApi) {
        this.client = client;
    }

    getTracks() {
        this.client.getTracks();
    }
}

const MusicApp = () => {
    const API = new MusicClient(new SpotifyApi())

    API.getTracks()
}