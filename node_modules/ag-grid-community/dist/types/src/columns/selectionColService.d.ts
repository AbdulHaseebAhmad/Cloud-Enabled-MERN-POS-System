import type { NamedBean } from '../context/bean';
import { BeanStub } from '../context/beanStub';
import { AgColumn } from '../entities/agColumn';
import type { ColumnEventType } from '../events';
import type { ColKey, ColumnCollections } from './columnModel';
export declare const CONTROLS_COLUMN_ID_PREFIX: "ag-Grid-SelectionColumn";
export declare class SelectionColService extends BeanStub implements NamedBean {
    beanName: "selectionColSvc";
    selectionCols: ColumnCollections | null;
    postConstruct(): void;
    addSelectionCols(cols: ColumnCollections): void;
    createSelectionCols(cols: ColumnCollections, updateOrders: (callback: (cols: AgColumn[] | null) => AgColumn[] | null) => void): void;
    isSelectionColumnEnabled(): boolean;
    private generateSelectionCols;
    putSelectionColsFirstInList(list: AgColumn[], cols?: AgColumn[] | null): AgColumn[] | null;
    getSelectionCol(key: ColKey): AgColumn | null;
    getSelectionCols(): AgColumn[] | null;
    private onSelectionOptionsChanged;
    destroy(): void;
    refreshVisibility(source: ColumnEventType): void;
}
