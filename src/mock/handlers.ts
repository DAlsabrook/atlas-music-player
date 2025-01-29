import { http, HttpResponse } from 'msw'

export const handlers  = [
  http.get('/api/playlist', () => {
    return HttpResponse.json([{
          artist: "Soul Canvas",
          cover: "https://utfs.io/f/E9fJnaKtTy1bOclGsk1hB7xMLwUVFDiXypZukQrcnYbgdEv6",
          duration: 194,
          genre: "Neo-Soul",
          id: "cm3ixp4sy0thg0cmtdzukgg56",
          lyrics: "[Verse]\nThe night whispers secrets we knew,\nUnder twilight's soft, velvet hue,\nIn a city painted in blue,\nWe danced 'round the truth we flew.\n\n[Verse 2]\nLamp posts glow with memories sweet,\nAs shadows and dreams softly meet,\nEvery step we take is so fleet,\nTo the syncopated heartbeat.\n\n[Chorus]\nOur love's a gentle, wistful tune,\nLike a rose in the midday bloom,\nThough fleeting like a smoke plume,\nIt's a love that leaves no room.\n\n[Verse 3]\nStars overhead wink their bright eye,\nAs the moon sighs a fond goodbye,\nWe'll let this moment, too, pass by,\nIn this melancholy sky.\n\n[Bridge]\nBlue echoes on the midnight air,\nLove caressed with a tender flair,\nThrough the darkness, hearts laid bare,\nIn the silence, a fervent prayer.\n\n[Chorus]\nOur love's a gentle, wistful tune,\nLike a rose in the midday bloom,\nThough fleeting like a smoke plume,\nIt's a love that leaves no room.",
          song: "https://utfs.io/f/E9fJnaKtTy1bKvfYqtyF6VvYXu54caAPJNw32O1dDHjxTWfi",
          title: "Painted in Blue"
        },
      {
          artist: "Soul",
          cover: "https://utfs.io/f/E9fJnaKtTy1bOclGsk1hB7xMLwUVFDiXypZukQrcnYbgdEv6",
          duration: 194,
          genre: "Neo-Soul",
          id: "cm3ixp4sy0thg0cmtdzukgg56",
          lyrics: "[Verse]\nThe night whispers secrets we knew,\nUnder twilight's soft, velvet hue,\nIn a city painted in blue,\nWe danced 'round the truth we flew.\n\n[Verse 2]\nLamp posts glow with memories sweet,\nAs shadows and dreams softly meet,\nEvery step we take is so fleet,\nTo the syncopated heartbeat.\n\n[Chorus]\nOur love's a gentle, wistful tune,\nLike a rose in the midday bloom,\nThough fleeting like a smoke plume,\nIt's a love that leaves no room.\n\n[Verse 3]\nStars overhead wink their bright eye,\nAs the moon sighs a fond goodbye,\nWe'll let this moment, too, pass by,\nIn this melancholy sky.\n\n[Bridge]\nBlue echoes on the midnight air,\nLove caressed with a tender flair,\nThrough the darkness, hearts laid bare,\nIn the silence, a fervent prayer.\n\n[Chorus]\nOur love's a gentle, wistful tune,\nLike a rose in the midday bloom,\nThough fleeting like a smoke plume,\nIt's a love that leaves no room.",
          song: "https://utfs.io/f/E9fJnaKtTy1bKvfYqtyF6VvYXu54caAPJNw32O1dDHjxTWfi",
          title: "Painted in Blue"
        }]
      )
  }),
];

// https://mswjs.io/docs/getting-started
