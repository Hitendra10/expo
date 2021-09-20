import { ColorValue } from 'react-native';

import ExpoSystemUI from './ExpoSystemUI';

/**
 * Configures the device's System UI.
 *
 * On Android, the System UI contains the Navigation Bar and Status Bar, on iOS this contains the Home Indicator and Status Bar.
 */
export const SystemUI = {
  /**
   * Changes the Android Navigation Bar color.
   * @example
   * ```typescript
   * SystemUI.setNavigationBarColor("white");
   * ```
   */
  setNavigationBarColor: (color: ColorValue) => {
    return ExpoSystemUI.setNavigationBarColor(color);
  },
  /**
   * Changes the Android Navigation Bar visibility.
   *
   * @example
   * ```typescript
   * SystemUI.setVisibility("hidden");
   * ```
   */
  setVisibility: (visibility: 'visible' | 'hidden') => {
    return ExpoSystemUI.setSystemUiVisibility(visibility);
  },
};
