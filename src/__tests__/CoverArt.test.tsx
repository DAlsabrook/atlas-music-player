import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { CoverArt } from "@/components/CoverArt.tsx";

// Cleans DOM and any change that may have happened in a test
afterEach(() => {
    cleanup();
});

async function fetchPlaylist() {
    const response = await fetch('/api/playlist');
    return response.json();
}

test("renders loading skeleton when loading is true", async () => {
  const playlist = await fetchPlaylist();
  const { container } = render(<CoverArt loading={true} playlist={playlist} currentSong={0} />);
  expect(container).toMatchSnapshot();
});

test("renders cover image when loading is false", async () => {
  const playlist = await fetchPlaylist();
  const { container } = render(<CoverArt loading={false} playlist={playlist} currentSong={0} />);
  expect(container).toMatchSnapshot();
});

test("renders lyrics when loading is false and image is hovered", async () => {
  const playlist = await fetchPlaylist();
  const { container } = render(<CoverArt loading={false} playlist={playlist} currentSong={0} />);
  expect(container).toMatchSnapshot();
});
