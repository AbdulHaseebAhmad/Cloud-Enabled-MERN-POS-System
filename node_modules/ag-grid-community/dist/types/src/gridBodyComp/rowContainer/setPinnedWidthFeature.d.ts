import { BeanStub } from '../../context/beanStub';
export declare class SetPinnedWidthFeature extends BeanStub {
    private readonly element;
    private readonly isLeft;
    readonly getWidth: () => number;
    constructor(element: HTMLElement, isLeft: boolean);
    postConstruct(): void;
    private onPinnedWidthChanged;
}
