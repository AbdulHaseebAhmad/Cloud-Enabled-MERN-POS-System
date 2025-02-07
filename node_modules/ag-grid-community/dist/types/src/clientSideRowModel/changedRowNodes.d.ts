import type { RowNode } from '../entities/rowNode';
import type { IChangedRowNodes } from '../interfaces/iClientSideRowModel';
import type { IRowNode } from '../interfaces/iRowNode';
export declare class ChangedRowNodes<TData = any> implements IChangedRowNodes<TData> {
    readonly removals: Set<RowNode<TData>>;
    readonly updates: Map<RowNode<TData>, boolean>;
    /** Marks a row as removed. Order of operations is: remove, update, add */
    remove(node: IRowNode<TData>): void;
    /** Marks a row as updated. Order of operations is: remove, update, add */
    update(node: IRowNode<TData>): void;
    /** Marks a row as added. Order of operation is: remove, update, add */
    add(node: IRowNode<TData>): void;
}
