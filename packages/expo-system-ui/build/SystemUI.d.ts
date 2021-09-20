import { ColorValue } from 'react-native';
/**
 * * "light": Light Mode
 * * "dark": Dark/Night Mode
 * * "auto": Follow System mode, automatically switch to dark mode.
 * * "unspecified": Default
 */
/**
 * Changes the Android Status Bar's background color.
 * @example
 * ```typescript
 * SystemUI.setStatusBarBackgroundColor("white");
 * ```
 */
export declare function setStatusBarBackgroundColor(color: ColorValue): Promise<void>;
/**
 * Gets the Android Status Bar's background color.
 * @example
 * ```typescript
 * const color = await SystemUI.getStatusBarBackgroundColor();
 * ```
 */
export declare function getStatusBarBackgroundColor(): Promise<ColorValue>;
/**
 * Changes the Android Navigation Bar's background color.
 * @example
 * ```typescript
 * SystemUI.setNavigationBarBackgroundColor("white");
 * ```
 */
export declare function setNavigationBarBackgroundColor(color: ColorValue): Promise<void>;
/**
 * Gets the Android Navigation Bar's background color.
 * @example
 * ```typescript
 * const color = await SystemUI.getNavigationBarBackgroundColor();
 * ```
 */
export declare function getNavigationBarBackgroundColor(): Promise<ColorValue>;
/**
 * Changes the Android Navigation Bar's Divider color.
 * @example
 * ```typescript
 * SystemUI.setNavigationBarDividerColor("red");
 * ```
 */
export declare function setNavigationBarDividerColor(color: ColorValue): Promise<void>;
/**
 * Gets the Android Navigation Bar's Divider color.
 * @example
 * ```typescript
 * const color = await SystemUI.getNavigationBarDividerColor();
 * ```
 */
export declare function getNavigationBarDividerColor(): Promise<ColorValue>;
/**
 * Changes the Android Navigation Bar's visibility.
 *
 * @example
 * ```typescript
 * SystemUI.setNavigationBarVisibility("hidden");
 * ```
 */
export declare function setNavigationBarVisibility(visibility: 'visible' | 'hidden'): Promise<void>;
/**
 * Changes the Android Status Bar's visibility.
 *
 * @example
 * ```typescript
 * SystemUI.setStatusBarVisibility("hidden");
 * ```
 */
export declare function setStatusBarVisibility(visibility: 'visible' | 'hidden'): Promise<void>;
/**
 * Changes the Android Navigation Bar's foreground style.
 *
 * @example
 * ```typescript
 * SystemUI.setNavigationBarForegroundStyle("light");
 * ```
 */
export declare function setNavigationBarForegroundStyle(style: 'light' | 'dark'): Promise<void>;
/**
 * Gets the Android Navigation Bar's foreground style.
 *
 * @example
 * ```typescript
 * const style = await SystemUI.getNavigationBarForegroundStyle();
 * ```
 */
export declare function getNavigationBarForegroundStyle(): Promise<'light' | 'dark'>;
/**
 * Changes the Android Status Bar's foreground style.
 *
 * @example
 * ```typescript
 * SystemUI.setStatusBarForegroundStyle("light");
 * ```
 */
export declare function setStatusBarForegroundStyle(style: 'light' | 'dark'): Promise<void>;
/**
 * Gets the Android Status Bar's foreground style.
 *
 * @example
 * ```typescript
 * const style = await SystemUI.getStatusBarForegroundStyle();
 * ```
 */
export declare function getStatusBarForegroundStyle(): Promise<'light' | 'dark'>;
