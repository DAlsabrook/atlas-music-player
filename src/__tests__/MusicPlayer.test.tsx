import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

// Mock HTMLMediaElement.prototype.play
beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: vi.fn().mockImplementation(() => Promise.resolve()),
  });
});

test('current song is first song in playlist by default', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    const songTitle = screen.getAllByText("Starlight Scene");
    expect(songTitle[0]).toBeInTheDocument();
  });
});

test('toggles play/pause button', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    const playPauseButton = screen.getByLabelText('PlayPause');
    fireEvent.click(playPauseButton);
    expect(screen.getByLabelText('PauseIcon')).toBeInTheDocument();

    fireEvent.click(playPauseButton);
    expect(screen.getByLabelText('PlayIcon')).toBeInTheDocument();
  });
});

test('forward button changes song correctly', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    const forwardButton = screen.getByLabelText('Next');
    fireEvent.click(forwardButton);

    const nextSongTitle = screen.getAllByText("Moonlight Melody");
    expect(nextSongTitle[0]).toBeInTheDocument();
  });
});

test('back button changes song correctly', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    const forwardButton = screen.getByLabelText('Next');
    fireEvent.click(forwardButton);

    const nextSongTitle = screen.getAllByText("Moonlight Melody");
    expect(nextSongTitle[0]).toBeInTheDocument();

    const backButton = screen.getByLabelText('Previous');
    fireEvent.click(backButton);

    const previousSongTitle = screen.getAllByText("Starlight Scene");
    expect(previousSongTitle[0]).toBeInTheDocument();
  });
});

test('clicking speed button toggles speed settings', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    let speedButton = screen.getByText("1x");

    fireEvent.click(speedButton);
    speedButton = screen.getByText("2x");
    expect(speedButton).toBeInTheDocument();

    fireEvent.click(speedButton);
    speedButton = screen.getByText("0.5x");
    expect(speedButton).toBeInTheDocument();

    fireEvent.click(speedButton);
    speedButton = screen.getByText("1x");
    expect(speedButton).toBeInTheDocument();
  });
});
