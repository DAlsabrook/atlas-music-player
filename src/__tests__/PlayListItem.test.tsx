import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { PlayListItem } from "@/components/PlayListItem.tsx";

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

test('Playing is false', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<PlayListItem songName={playlist[0].title} songTime={playlist[0].duration} artist={playlist[0].artist} isPlaying={false}/>)
    expect(container).toMatchSnapshot();
})

test('Playing is true', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<PlayListItem songName={playlist[0].title} songTime={playlist[0].duration} artist={playlist[0].artist} isPlaying={true}/>)
    expect(container).toMatchSnapshot();
})

test('Duration is too long', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<PlayListItem songName={playlist[0].title} songTime={12345678} artist={playlist[0].artist} isPlaying={true}/>)
    expect(container).toMatchSnapshot();
})

test('Renders with minimal props', () => {
    const container = render(<PlayListItem songName="Test Song" songTime={120} artist="Test Artist" isPlaying={false}/>)
    expect(container).toMatchSnapshot();
})

test('Renders with different durations', async () => {
    const playlist = await fetchPlaylist();
    if (!playlist) throw new Error('Playlist is undefined');
    const container = render(<PlayListItem songName={playlist[0].title} songTime={300} artist={playlist[0].artist} isPlaying={false}/>)
    expect(container).toMatchSnapshot();
})
