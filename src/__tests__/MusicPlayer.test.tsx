import { render, screen, waitFor } from "@testing-library/react";
import MusicPlayer from "@/components/MusicPlayer.tsx";
import { expect, test, beforeAll, vi } from "vitest";
import '@testing-library/jest-dom';

// Mock HTMLMediaElement.prototype.pause
beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: vi.fn(),
  });
});

test('renders MusicPlayer and displays the first song in the playlist', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    screen.debug();
    const songTitle = screen.getAllByText("Starlight Scene")[0];
    expect(songTitle).toBeInTheDocument();
  });
});
