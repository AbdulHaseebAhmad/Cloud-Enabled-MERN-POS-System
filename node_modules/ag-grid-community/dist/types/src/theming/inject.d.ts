import type { Environment } from '../environment';
export declare const IS_SSR: boolean;
export declare const _injectGlobalCSS: (css: string, container: HTMLElement, debugId: string) => void;
export declare const _injectCoreAndModuleCSS: (container: HTMLElement) => void;
export declare const _registerGridUsingThemingAPI: (environment: Environment) => void;
export declare const _unregisterGridUsingThemingAPI: (environment: Environment) => void;
