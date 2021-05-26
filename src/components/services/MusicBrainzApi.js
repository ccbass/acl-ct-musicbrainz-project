export const getAlbums = async (artist) => { 
  const res = await fetch(`http://musicbrainz.org/ws/2/release?artist=${artist}&fmt=json`);
  const Albums = await res.json() 
  console.log(Albums)


  return Albums.releases.map(album => ({
      id: album.id,
      title: album.title,
      date: album.date,
      quality: album.quality

  }));

}