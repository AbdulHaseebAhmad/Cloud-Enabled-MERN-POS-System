import type { IDragAndDropImageComponent, IDragAndDropImageParams } from '../../dragAndDrop/dragAndDropImageComponent';
import type { ColDef } from '../../entities/colDef';
import type { IFloatingFilterComp, IFloatingFilterParams } from '../../filter/floating/floatingFilter';
import type { IHeaderComp, IHeaderParams, IInnerHeaderComponent } from '../../headerRendering/cells/column/headerComp';
import type { IHeaderGroupComp, IHeaderGroupParams, IInnerHeaderGroupComponent } from '../../headerRendering/cells/columnGroup/headerGroupComp';
import type { IDateComp, IDateParams } from '../../interfaces/dateComponent';
import type { ICellEditorComp, ICellEditorParams } from '../../interfaces/iCellEditor';
import type { AgGridCommon, WithoutGridCommon } from '../../interfaces/iCommon';
import type { IFilterComp, IFilterDef, IFilterParams } from '../../interfaces/iFilter';
import type { IFrameworkOverrides } from '../../interfaces/iFrameworkOverrides';
import type { ILoadingCellRendererComp } from '../../interfaces/iLoadingCellRenderer';
import type { UserCompDetails } from '../../interfaces/iUserCompDetails';
import type { ICellRendererComp, ICellRendererParams } from '../../rendering/cellRenderers/iCellRenderer';
import type { ILoadingOverlayComp, ILoadingOverlayParams } from '../../rendering/overlays/loadingOverlayComponent';
import type { INoRowsOverlayComp, INoRowsOverlayParams } from '../../rendering/overlays/noRowsOverlayComponent';
import type { ITooltipComp, ITooltipParams } from '../../tooltip/tooltipComponent';
import type { UserComponentFactory } from './userComponentFactory';
export declare function _getDragAndDropImageCompDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<IDragAndDropImageParams>): UserCompDetails<IDragAndDropImageComponent> | undefined;
export declare function _getInnerCellRendererDetails<TDefinition = any>(userCompFactory: UserComponentFactory, def: TDefinition, params: WithoutGridCommon<ICellRendererParams>): UserCompDetails<ICellRendererComp> | undefined;
export declare function _getHeaderCompDetails(userCompFactory: UserComponentFactory, colDef: ColDef, params: WithoutGridCommon<IHeaderParams>): UserCompDetails<IHeaderComp> | undefined;
export declare function _getInnerHeaderCompDetails(userCompFactory: UserComponentFactory, headerCompParams: IHeaderParams, params: WithoutGridCommon<IHeaderParams>): UserCompDetails<IInnerHeaderComponent> | undefined;
export declare function _getHeaderGroupCompDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<IHeaderGroupParams>): UserCompDetails<IHeaderGroupComp> | undefined;
export declare function _getInnerHeaderGroupCompDetails(userCompFactory: UserComponentFactory, headerGroupCompParams: IHeaderGroupParams, params: WithoutGridCommon<IHeaderGroupParams>): UserCompDetails<IInnerHeaderGroupComponent> | undefined;
export declare function _getFullWidthCellRendererDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<ICellRendererParams>): UserCompDetails<ICellRendererComp> | undefined;
export declare function _getFullWidthLoadingCellRendererDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<ICellRendererParams>): UserCompDetails<ILoadingCellRendererComp> | undefined;
export declare function _getFullWidthGroupCellRendererDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<ICellRendererParams>): UserCompDetails<ICellRendererComp> | undefined;
export declare function _getFullWidthDetailCellRendererDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<ICellRendererParams>): UserCompDetails<ICellRendererComp> | undefined;
export declare function _getCellRendererDetails<TDefinition = ColDef, TParams = ICellRendererParams>(userCompFactory: UserComponentFactory, def: TDefinition, params: WithoutGridCommon<TParams>): UserCompDetails<ICellRendererComp> | undefined;
export declare function _getEditorRendererDetails<TDefinition, TEditorParams extends AgGridCommon<any, any>>(userCompFactory: UserComponentFactory, def: TDefinition, params: WithoutGridCommon<TEditorParams>): UserCompDetails | undefined;
export declare function _getLoadingCellRendererDetails(userCompFactory: UserComponentFactory, def: ColDef, params: WithoutGridCommon<ICellRendererParams>): UserCompDetails<ILoadingCellRendererComp> | undefined;
export declare function _getCellEditorDetails(userCompFactory: UserComponentFactory, def: ColDef, params: WithoutGridCommon<ICellEditorParams>): UserCompDetails<ICellEditorComp> | undefined;
/**
 * @param defaultFilter provided filters only
 */
export declare function _getFilterDetails(userCompFactory: UserComponentFactory, def: IFilterDef, params: WithoutGridCommon<IFilterParams>, defaultFilter: string): UserCompDetails<IFilterComp> | undefined;
export declare function _getDateCompDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<IDateParams>): UserCompDetails<IDateComp> | undefined;
export declare function _getLoadingOverlayCompDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<ILoadingOverlayParams>): UserCompDetails<ILoadingOverlayComp> | undefined;
export declare function _getNoRowsOverlayCompDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<INoRowsOverlayParams>): UserCompDetails<INoRowsOverlayComp> | undefined;
export declare function _getTooltipCompDetails(userCompFactory: UserComponentFactory, params: WithoutGridCommon<ITooltipParams>): UserCompDetails<ITooltipComp> | undefined;
/**
 * @param defaultFloatingFilter provided floating filters only
 */
export declare function _getFloatingFilterCompDetails(userCompFactory: UserComponentFactory, def: IFilterDef, params: WithoutGridCommon<IFloatingFilterParams<any>>, defaultFloatingFilter: string): UserCompDetails<IFloatingFilterComp> | undefined;
export declare function _getFilterCompKeys(frameworkOverrides: IFrameworkOverrides, def: IFilterDef): {
    compName?: string | undefined;
    jsComp: any;
    fwComp: any;
    paramsFromSelector: any;
    popupFromSelector?: boolean | undefined;
    popupPositionFromSelector?: "over" | "under" | undefined;
};
export declare function _mergeFilterParamsWithApplicationProvidedParams(userCompFactory: UserComponentFactory, defObject: ColDef, paramsFromGrid: IFilterParams): IFilterParams;
