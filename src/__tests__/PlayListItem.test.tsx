import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { PlayListItem } from "@/components/PlayListItem.tsx";

// Cleans DOM and any change that may have happened in a test
afterEach(() => {
    cleanup();
});

async function fetchPlaylist() {
    const response = await fetch('/api/playlist');
    return response.json();
}

test('Playing is false', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<PlayListItem songName={playlist.title} songTime={playlist.duration} artist={playlist.artist} isPlaying={false}/>)
    expect(container).toMatchSnapshot();
})

test('Playing is true', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<PlayListItem songName={playlist.title} songTime={playlist.duration} artist={playlist.artist} isPlaying={true}/>)
    expect(container).toMatchSnapshot();
})

test('Duration is too long', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<PlayListItem songName={playlist.title} songTime={12345678} artist={playlist.artist} isPlaying={true}/>)
    expect(container).toMatchSnapshot();
})

test('Renders with minimal props', () => {
    const container = render(<PlayListItem songName="Test Song" songTime={120} artist="Test Artist" isPlaying={false}/>)
    expect(container).toMatchSnapshot();
})
// @ts-ignore
test('Handles missing props', () => {
    const container = render(<PlayListItem songName="Test Song" songTime={120} artist="Test Artist" />)
    expect(container).toMatchSnapshot();
})
// @ts-ignore
test('Handles typo in props', () => {
    const container = render(<PlayListItem songName="Test Song" songTime={120} artist="Test Artist" isplayin={true} />)
    expect(container).toMatchSnapshot();
})

test('Renders with different durations', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<PlayListItem songName={playlist.title} songTime={300} artist={playlist.artist} isPlaying={false}/>)
    expect(container).toMatchSnapshot();
})
