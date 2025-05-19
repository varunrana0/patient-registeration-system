import { render, screen, fireEvent } from "@testing-library/react";
import RegisterPatients from "./RegisterPatient";

jest.mock("@/features/patientManagement/utils.ts", () => ({
  registerPatient: jest.fn(),
  getAllPatients: jest.fn(),
}));

describe("RegisterPatients", () => {
  beforeEach(() => {
    global.BroadcastChannel = class {
      constructor() {}
      postMessage = jest.fn();
      close = jest.fn();
      onmessage: ((event: MessageEvent) => void) | null = null;
    } as unknown as typeof BroadcastChannel;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dialog when button is clicked", () => {
    render(<RegisterPatients />);
    fireEvent.click(screen.getByRole("button", { name: /add new patient/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
