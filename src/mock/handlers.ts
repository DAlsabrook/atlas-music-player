import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock handler for the playlist endpoint
  http.get('http://localhost:5173/api/v1/playlist', () => {
    return HttpResponse.json([
        {
          id: "hdees11mmk6g2078ewijsflly1r",
          title: "Starlight Scene",
          artist: "Dance Troop 5",
          genre: "Punk Rock",
          duration: 250
        },
        {
          id: "newSongId123",
          title: "Moonlight Melody",
          artist: "Lunar Tunes",
          genre: "Ambient",
          duration: 300
        }
      ])
  }),

  // Mock handler for the song details endpoint
  http.get('http://localhost:5173/api/v1/songs/:id', (req: { params: { id: string } }) => {
    const { id } = req.params;
    const songDetails: { [key: string]: { id: string; title: string; artist: string; genre: string; duration: number; cover: string; song: string } } = {
      "hdees11mmk6g2078ewijsflly1r": {
        id: "hdees11mmk6g2078ewijsflly1r",
        title: "Starlight Scene",
        artist: "Dance Troop 5",
        genre: "Punk Rock",
        duration: 250,
        cover: "https://placehold.co/400",
        song: "https://placehold.co/400"
      },
      "newSongId123": {
        id: "newSongId123",
        title: "Moonlight Melody",
        artist: "Lunar Tunes",
        genre: "Ambient",
        duration: 300,
        cover: "https://placehold.co/400",
        song: "https://placehold.co/400"
      }
    };
    return HttpResponse.json(songDetails[id]);
  }),

  // Mock handler for the lyrics endpoint
  http.get('http://localhost:5173/api/v1/lyrics/:id', (req) => {
    const { id } = req.params as { id: string };
    const lyrics: { [key: string]: { lyrics: string } } = {
      "hdees11mmk6g2078ewijsflly1r": {
        lyrics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      "newSongId123": {
        lyrics: "Moonlight shines, melodies intertwine, in the silence of the night."
      }
    };
    return HttpResponse.json(lyrics[id]);
  }),
];
