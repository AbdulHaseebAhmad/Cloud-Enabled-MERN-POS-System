import type { MutableRefObject } from 'react';
import type { Context, UserCompDetails } from 'ag-grid-community';
/**
 * Show a JS Component
 * @returns Effect Cleanup function
 */
export declare const showJsComp: (compDetails: UserCompDetails | undefined | null, context: Context, eParent: HTMLElement, ref?: MutableRefObject<any> | ((ref: any) => void) | undefined) => (() => void) | undefined;
