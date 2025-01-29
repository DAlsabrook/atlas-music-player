import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import MusicPlayer from "@/components/MusicPlayer.tsx";
import { test } from "vitest";
import { expect } from "vitest";


test('renders MusicPlayer and displays the first song in the playlist', async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    // Check if the first song in the playlist is rendered
    const songTitle = screen.getByText("Soul");
    expect(songTitle).toBeInTheDocument();
  });
});


// I have no idea why this is happening. Happens anytime i run a non-snapshot test

//  FAIL  src/__tests__/MusicPlayer.test.tsx [ src/__tests__/MusicPlayer.test.tsx ]
// ReferenceError: expect is not defined
//  ❯ node_modules/@testing-library/jest-dom/dist/index.mjs:10:1
//       8| import 'css.escape';
//       9|
//      10| expect.extend(extensions);
//        | ^
//      11|
//  ❯ src/__tests__/MusicPlayer.test.tsx:1:1
