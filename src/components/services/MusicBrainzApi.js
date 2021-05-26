export const getAlbums = async (artist) => {
    const res = await fetch(
        `http://musicbrainz.org/ws/2/release?artist=${artist}&fmt=json`
    );
    const Albums = await res.json();
    console.log(Albums);

    return Albums.releases.map((album) => ({
        id: album.id,
        title: album.title,
        date: album.date,
        quality: album.quality,
    }));
};

export const fetchRecordings = async (release) => {
    const res = await fetch(
        `http://musicbrainz.org/ws/2/recording?release=${release}&fmt=json`
    );

    const recs = await res.json();

    return recs.recordings.map((recording) => ({
        title: recording.title,
        releaseDate: recording.first_release_date,
        disambiguation: recording.disambiguation,
        length: recording.length,
        id: recording.id,
        video: recording.video,
    }));
};
