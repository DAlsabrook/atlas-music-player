import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { SongTitle } from "@/components/SongTitle.tsx";

// Cleans DOM and any change that may have happened in a test
afterEach(() => {
    cleanup();
});

async function fetchPlaylist() {
    const response = await fetch('/api/playlist');
    return response.json();
}


test('Correct inputs', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<SongTitle loading={true} playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})

test('not loading', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<SongTitle loading={false} playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})

test('Playlist empty', () => {
    const container = render(<SongTitle loading={true} playlist={[]} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})

test('Current song out of index', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<SongTitle loading={true} playlist={playlist} currentSong={1}/>)
    expect(container).toMatchSnapshot()
})
// @ts-ignore
test('typo', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<SongTitle loadin={true} playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})
// @ts-ignore
test('Missing prop', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<SongTitle playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})
// @ts-ignore
test('too many props', async () => {
    const playlist = await fetchPlaylist();
    const container = render(<SongTitle otherProp={'x'} loading={true} playlist={playlist} currentSong={0}/>)
    expect(container).toMatchSnapshot()
})
