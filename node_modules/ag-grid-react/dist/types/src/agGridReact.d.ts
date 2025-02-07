import React, { Component } from 'react';
import type { GridApi } from 'ag-grid-community';
import type { AgGridReactProps } from './shared/interfaces';
export declare class AgGridReact<TData = any> extends Component<AgGridReactProps<TData>, object> {
    /** Grid Api available after onGridReady event has fired. */
    api: GridApi<TData>;
    private apiListeners;
    registerApiListener(listener: (api: GridApi) => void): void;
    private setGridApi;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
