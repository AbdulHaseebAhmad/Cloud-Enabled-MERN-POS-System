import type { MutableRefObject } from 'react';
import type { ICellRendererComp } from 'ag-grid-community';
import type { RenderDetails } from './cellComp';
declare const useJsCellRenderer: (showDetails: RenderDetails | undefined, showTools: boolean, eCellValue: HTMLElement | undefined | null, cellValueVersion: number, jsCellRendererRef: MutableRefObject<ICellRendererComp | undefined>, eGui: MutableRefObject<any>) => void;
export default useJsCellRenderer;
