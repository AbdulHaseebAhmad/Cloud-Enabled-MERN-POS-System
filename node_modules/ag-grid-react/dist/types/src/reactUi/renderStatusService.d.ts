import type { BeanCollection, IRenderStatusService } from 'ag-grid-community';
import { BeanStub } from 'ag-grid-community';
export declare class RenderStatusService extends BeanStub implements IRenderStatusService {
    private ctrlsSvc;
    wireBeans(beans: BeanCollection): void;
    areHeaderCellsRendered(): boolean;
}
