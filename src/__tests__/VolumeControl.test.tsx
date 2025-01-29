import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { VolumeControls } from "@/components/VolumeControls.tsx";

test('Not much to test here. Renders the same either way', () => {
    const container = render(<VolumeControls setVolume={() => {}}/>)
    expect(container).toMatchSnapshot()
})
