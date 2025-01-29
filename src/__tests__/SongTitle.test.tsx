import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { SongTitle } from "@/components/SongTitle.tsx";

// Cleans DOM and any change that may have happened in a test
afterEach(() => {
    cleanup();
});

export type Song = {
  artist: String
  cover: string
  duration: Number
  genre: String
  id: String
  lyrics: String
  song: String
  title: String
}

const fetchPlaylist = async () => {
    const response = await fetch('http://localhost:5173/api/v1/playlist');
    if (response.ok) {
        const data = await response.json();
        const detailedSongs = await Promise.all(data.map(async (song: Song) => {
        const songDetailsResponse = await fetch(`http://localhost:5173/api/v1/songs/${song.id}`);
        if (songDetailsResponse.ok) {
            const songDetails = await songDetailsResponse.json();
            return { ...song, ...songDetails };
        }
        return song;
        }));
        const fullDetailedSongs = await Promise.all(detailedSongs.map(async (song: Song) => {
        const songDetailsResponse = await fetch(`http://localhost:5173/api/v1/lyrics/${song.id}`);
        if (songDetailsResponse.ok) {
            const songDetails = await songDetailsResponse.json();
            return { ...song, ...songDetails };
        }
            return song;
        }));
        return fullDetailedSongs
    }
};

test('Correct inputs', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<SongTitle loading={true} playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})

test('not loading', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<SongTitle loading={false} playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})

test('Playlist empty', () => {
    const container = render(<SongTitle loading={true} playlist={[]} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})

test('Current song out of index', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<SongTitle loading={true} playlist={playlist} currentSong={1}/>)
    expect(container).toMatchSnapshot()
})
