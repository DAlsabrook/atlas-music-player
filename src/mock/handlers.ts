import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock handler for the playlist endpoint
  http.get('http://localhost:5173/api/v1/playlist', () => {
    return HttpResponse.json([{
        id: "hdees11mmk6g2078ewijsflly1r",
        title: "Starlight Scene",
        artist: "Dance Troop 5",
        genre: "Punk Rock",
        duration: 250
      }])
  }),

  // Mock handler for the song details endpoint
  http.get('http://localhost:5173/api/v1/songs/:id', (req) => {
    const { id } = req.params;
    return HttpResponse.json({
        id,
        title: "Starlight Scene",
        artist: "Dance Troop 5",
        genre: "Punk Rock",
        duration: 250,
        cover: "https://placehold.co/400",
        song: "https://placehold.co/400"
      })
  }),

  // Mock handler for the lyrics endpoint
  http.get('http://localhost:5173/api/v1/lyrics/:id', () => {
    return HttpResponse.json({
        lyrics: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      })
  }),
];
