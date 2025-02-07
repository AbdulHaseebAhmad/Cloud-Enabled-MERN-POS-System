import type { ColumnCollections } from '../../columns/columnModel';
import type { NamedBean } from '../../context/bean';
import { BeanStub } from '../../context/beanStub';
import type { AgColumn } from '../../entities/agColumn';
import type { RowNode } from '../../entities/rowNode';
import type { CellCtrl } from '../cell/cellCtrl';
export declare class RowAutoHeightService extends BeanStub implements NamedBean {
    beanName: "rowAutoHeight";
    /** grid columns have colDef.autoHeight set */
    active: boolean;
    private wasEverActive;
    setRowAutoHeight(rowNode: RowNode, cellHeight: number | undefined, column: AgColumn): void;
    checkAutoHeights(rowNode: RowNode): void;
    private doCheckAutoHeights;
    setupCellAutoHeight(cellCtrl: CellCtrl, eCellWrapper: HTMLElement, compBean: BeanStub): void;
    setAutoHeightActive(cols: ColumnCollections): void;
}
