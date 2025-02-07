import type { IDragAndDropImageComponent, IDragAndDropImageParams } from 'ag-grid-community';
import { CustomComponentWrapper } from './customComponentWrapper';
import type { CustomDragAndDropImageProps } from './interfaces';
export declare class DragAndDropImageComponentWrapper extends CustomComponentWrapper<IDragAndDropImageParams, CustomDragAndDropImageProps, object> implements IDragAndDropImageComponent {
    private label;
    private icon;
    private shake;
    setIcon(iconName: string, shake: boolean): void;
    setLabel(label: string): void;
    protected getProps(): CustomDragAndDropImageProps;
}
