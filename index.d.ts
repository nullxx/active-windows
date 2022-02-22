declare module "electron-active-window";

/** Information about the active window */
export type WindowInformation = {
  /** Operating system (linux | windows | macos) */
  os: "linux" | "windows" | "macos";

  /** Process name*/
  windowClass: string;

  /** Name of the window */
  windowName: string;

  /** Desktop on which the window is displayed (Linux only) */
  windowDesktop: string | null;

  /** Window Type (Linux only) */
  windowType: string | null;

  /** Process ID of the window */
  windowPid: string;

  /** Timestamp for the time at which this data was retrieved (MacOS only) */
  atTime: string | null;

  /** Timestamp for when the window was opened (MacOS only) */
  launchDate: string | null;

  /** MaxOS only */
  isTerminated: number | null;
};

export default function module(): {
  /**
   * Returns information about the currently active desktop window
   */
  getActiveWindow: () => Promise<WindowInformation>;
};
