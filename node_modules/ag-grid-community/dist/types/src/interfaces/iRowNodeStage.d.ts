import type { GridOptions } from '../entities/gridOptions';
import type { RowNode } from '../entities/rowNode';
import type { ChangedPath } from '../utils/changedPath';
import type { ClientSideRowModelStage, IChangedRowNodes } from './iClientSideRowModel';
import type { RowNodeTransaction } from './rowNodeTransaction';
export interface StageExecuteParams<TData = any> {
    rowNode: RowNode<TData>;
    changedRowNodes?: IChangedRowNodes<TData>;
    rowNodeTransactions?: RowNodeTransaction<TData>[] | null;
    rowNodesOrderChanged?: boolean;
    changedPath?: ChangedPath;
    afterColumnsChanged?: boolean;
}
export interface IRowNodeStage<TResult = any, TData = any> {
    step: ClientSideRowModelStage;
    refreshProps: Set<keyof GridOptions>;
    execute(params: StageExecuteParams<TData>): TResult;
}
