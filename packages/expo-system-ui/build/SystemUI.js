import { Platform } from 'expo-modules-core';
import { processColor } from 'react-native';
import ExpoSystemUI from './ExpoSystemUI';
const assertIsOnPlatform = (functionName, onlyAvailableOn) => {
    if (!onlyAvailableOn.includes(Platform.OS)) {
        throw new Error(`"${functionName}" is only available on ${onlyAvailableOn.join(' or ')}! OS: ${Platform.OS}`);
    }
};
/**
 * * "light": Light Mode
 * * "dark": Dark/Night Mode
 * * "auto": Follow System mode, automatically switch to dark mode.
 * * "unspecified": Default
 */
// export type Appearance = 'light' | 'dark' | 'auto' | 'default';
/**
 * Changes the Android Status Bar's background color.
 * @example
 * ```typescript
 * SystemUI.setStatusBarBackgroundColor("white");
 * ```
 */
export function setStatusBarBackgroundColor(color) {
    assertIsOnPlatform('setStatusBarBackgroundColor', ['android']);
    const colorNumber = processColor(color);
    return ExpoSystemUI.setStatusBarBackgroundColor(colorNumber);
}
/**
 * Gets the Android Status Bar's background color.
 * @example
 * ```typescript
 * const color = await SystemUI.getStatusBarBackgroundColor();
 * ```
 */
export function getStatusBarBackgroundColor() {
    assertIsOnPlatform('getStatusBarBackgroundColor', ['android']);
    return ExpoSystemUI.getStatusBarBackgroundColor();
}
/**
 * Changes the Android Navigation Bar's background color.
 * @example
 * ```typescript
 * SystemUI.setNavigationBarBackgroundColor("white");
 * ```
 */
export function setNavigationBarBackgroundColor(color) {
    assertIsOnPlatform('setNavigationBarBackgroundColor', ['android']);
    const colorNumber = processColor(color);
    return ExpoSystemUI.setNavigationBarBackgroundColor(colorNumber);
}
/**
 * Gets the Android Navigation Bar's background color.
 * @example
 * ```typescript
 * const color = await SystemUI.getNavigationBarBackgroundColor();
 * ```
 */
export function getNavigationBarBackgroundColor() {
    assertIsOnPlatform('getNavigationBarBackgroundColor', ['android']);
    return ExpoSystemUI.getNavigationBarBackgroundColor();
}
/**
 * Changes the Android Navigation Bar's Divider color.
 * @example
 * ```typescript
 * SystemUI.setNavigationBarDividerColor("red");
 * ```
 */
export function setNavigationBarDividerColor(color) {
    assertIsOnPlatform('setNavigationBarDividerColor', ['android']);
    const colorNumber = processColor(color);
    return ExpoSystemUI.setNavigationBarDividerColor(colorNumber);
}
/**
 * Gets the Android Navigation Bar's Divider color.
 * @example
 * ```typescript
 * const color = await SystemUI.getNavigationBarDividerColor();
 * ```
 */
export function getNavigationBarDividerColor() {
    assertIsOnPlatform('getNavigationBarDividerColor', ['android']);
    return ExpoSystemUI.getNavigationBarDividerColor();
}
/**
 * Changes the Android Navigation Bar's visibility.
 *
 * @example
 * ```typescript
 * SystemUI.setNavigationBarVisibility("hidden");
 * ```
 */
export function setNavigationBarVisibility(visibility) {
    assertIsOnPlatform('setNavigationBarVisibility', ['android']);
    return ExpoSystemUI.setNavigationBarVisibility(visibility);
}
/**
 * Changes the Android Status Bar's visibility.
 *
 * @example
 * ```typescript
 * SystemUI.setStatusBarVisibility("hidden");
 * ```
 */
export function setStatusBarVisibility(visibility) {
    assertIsOnPlatform('setStatusBarVisibility', ['android']);
    return ExpoSystemUI.setStatusBarVisibility(visibility);
}
/**
 * Changes the Android Navigation Bar's foreground style.
 *
 * @example
 * ```typescript
 * SystemUI.setNavigationBarForegroundStyle("light");
 * ```
 */
export function setNavigationBarForegroundStyle(style) {
    assertIsOnPlatform('setNavigationBarForegroundStyle', ['android']);
    return ExpoSystemUI.setNavigationBarForegroundStyle(style);
}
/**
 * Gets the Android Navigation Bar's foreground style.
 *
 * @example
 * ```typescript
 * const style = await SystemUI.getNavigationBarForegroundStyle();
 * ```
 */
export function getNavigationBarForegroundStyle() {
    assertIsOnPlatform('getNavigationBarForegroundStyle', ['android']);
    return ExpoSystemUI.getNavigationBarForegroundStyle();
}
/**
 * Changes the Android Status Bar's foreground style.
 *
 * @example
 * ```typescript
 * SystemUI.setStatusBarForegroundStyle("light");
 * ```
 */
export function setStatusBarForegroundStyle(style) {
    assertIsOnPlatform('setStatusBarForegroundStyle', ['android']);
    return ExpoSystemUI.setStatusBarForegroundStyle(style);
}
/**
 * Gets the Android Status Bar's foreground style.
 *
 * @example
 * ```typescript
 * const style = await SystemUI.getStatusBarForegroundStyle();
 * ```
 */
export function getStatusBarForegroundStyle() {
    assertIsOnPlatform('getStatusBarForegroundStyle', ['android']);
    return ExpoSystemUI.getStatusBarForegroundStyle();
}
export function setDrawsBehindSystemUI(drawsBehindSystemUI) {
    assertIsOnPlatform('setDrawsBehindSystemUI', ['android']);
    return ExpoSystemUI.setDrawsBehindSystemUI(drawsBehindSystemUI);
}
// FIXME(Marc): Setting appearance crashes on Android because of RNScreens.
//  See `SystemUIModule.kt`'s `setAppearance` function for details.
// /**
//  * Sets the App's appearance.
//  *
//  * @example
//  * ```typescript
//  * SystemUI.setAppearance("dark");
//  * ```
//  */
// setAppearance: (appearance: Appearance): Promise<void> => {
//   assertIsOnPlatform('setAppearance', ['android']);
//   return ExpoSystemUI.setAppearance(appearance);
// },
// /**
//  * Gets the App's appearance.
//  * @example
//  * ```typescript
//  * const appearance = await SystemUI.getAppearance();
//  * ```
//  */
// getAppearance: (): Promise<Appearance> => {
//   assertIsOnPlatform('getAppearance', ['android']);
//   return ExpoSystemUI.getAppearance();
// },
//# sourceMappingURL=SystemUI.js.map