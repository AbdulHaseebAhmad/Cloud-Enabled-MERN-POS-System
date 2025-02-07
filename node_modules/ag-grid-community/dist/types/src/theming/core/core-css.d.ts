import type { ExpandTypeKeys } from '../Part';
import type { WithParamTypes } from '../theme-types';
export { coreCSS } from './core.css-GENERATED';
/**
 * All possible theme param types - the actual params available will be a subset of this type depending on the parts in use by the theme.
 */
type CoreParamsDefinitions = {
    /**
     * The 'brand color' for the grid, used wherever a non-neutral color is required. Selections, focus outlines and checkboxes use the accent color by default.
     */
    accentColor: 'infer';
    /**
     * Color of the dividing line above the buttons in the advanced filter builder
     */
    advancedFilterBuilderButtonBarBorder: 'infer';
    /**
     * Color of the column pills in the Advanced Filter Builder
     */
    advancedFilterBuilderColumnPillColor: 'infer';
    /**
     * Amount that each level of the nesting in the advanced filter builder is indented by
     */
    advancedFilterBuilderIndentSize: 'infer';
    /**
     * Color of the join operator pills in the Advanced Filter Builder
     */
    advancedFilterBuilderJoinPillColor: 'infer';
    /**
     * Color of the filter option pills in the Advanced Filter Builder
     */
    advancedFilterBuilderOptionPillColor: 'infer';
    /**
     * Color of the value pills in the Advanced Filter Builder
     */
    advancedFilterBuilderValuePillColor: 'infer';
    /**
     * Background color of the grid. Many UI elements are semi-transparent, so their color blends with the background color.
     */
    backgroundColor: 'infer';
    /**
     * Default color for borders.
     */
    borderColor: 'infer';
    /**
     * Default corner radius for many UI elements such as menus, dialogs and form widgets.
     */
    borderRadius: 'infer';
    /**
     * The CSS color-scheme to apply to the grid, which affects the default appearance of browser scrollbars form inputs unless these have been styled with CSS.
     */
    browserColorScheme: 'infer';
    /**
     * Padding at the start and end of grid cells and header cells.
     */
    cellHorizontalPadding: 'infer';
    /**
     * Multiply the cell horizontal padding by a number, e.g. 1.5 to increase by 50%
     */
    cellHorizontalPaddingScale: 'infer';
    /**
     * Color of text in grid cells.
     */
    cellTextColor: 'infer';
    /**
     * Horizontal spacing between widgets inside cells (e.g. row group expand buttons and row selection checkboxes).
     */
    cellWidgetSpacing: 'infer';
    /**
     * Color of form field labels within the chart editing panel for integrated charts
     */
    chartMenuLabelColor: 'infer';
    /**
     * Width of the chart editing panel for integrated charts
     */
    chartMenuPanelWidth: 'infer';
    /**
     * Background color for non-data areas of the grid. Headers, tool panels and menus use this color by default.
     */
    chromeBackgroundColor: 'infer';
    /**
     * Vertical borders between columns within the grid only, excluding headers.
     */
    columnBorder: 'infer';
    /**
     * Background color of the pill shape representing columns in the column drop component
     */
    columnDropCellBackgroundColor: 'infer';
    /**
     * Text color for the pill shape representing columns in the column drop component
     */
    columnDropCellTextColor: 'infer';
    /**
     * Color of the drag grip icon in the pill shape representing columns in the column drop component
     */
    columnDropCellDragHandleColor: 'infer';
    /**
     * Border for the pill shape representing columns in the column drop component
     */
    columnDropCellBorder: 'infer';
    /**
     * Background color when hovering over columns in the grid. This is not visible unless enabled in the grid options.
     */
    columnHoverColor: 'infer';
    /**
     * Amount of indentation for each level of children when selecting grouped columns in the column select widget.
     */
    columnSelectIndentSize: 'infer';
    /**
     * Border color popup dialogs such as the integrated charts and the advanced filter builder.
     */
    dialogBorder: 'infer';
    /**
     * Shadow for popup dialogs such as the integrated charts and the advanced filter builder.
     */
    dialogShadow: 'infer';
    /**
     * Border around cells being edited
     */
    cellEditingBorder: 'infer';
    /**
     * Shadow for cells being edited
     */
    cellEditingShadow: 'infer';
    /**
     * Background color of the drag and drop image component element when dragging columns
     */
    dragAndDropImageBackgroundColor: 'infer';
    /**
     * Border color of the drag and drop image component element when dragging columns
     */
    dragAndDropImageBorder: 'infer';
    /**
     * Shadow for the drag and drop image component element when dragging columns
     */
    dragAndDropImageShadow: 'infer';
    /**
     * Color of the drag handle on draggable rows and column markers
     */
    dragHandleColor: 'infer';
    /**
     * Default shadow for dropdown menus
     */
    dropdownShadow: 'infer';
    /**
     * How much to indent child columns in the filters tool panel relative to their parent
     */
    filterToolPanelGroupIndent: 'infer';
    /**
     * Shadow around UI controls that have focus e.g. text inputs and buttons. The value must a valid CSS box-shadow.
     */
    focusShadow: 'infer';
    /**
     * Default font family for all text. Can be overridden by more specific parameters like `headerFontFamily`
     */
    fontFamily: 'infer';
    /**
     * Default font size for text throughout the grid UI
     */
    fontSize: 'infer';
    /**
     * Font size for data in grid rows
     */
    dataFontSize: 'infer';
    /**
     * Horizontal borders above footer components like the pagination and status bars
     */
    footerRowBorder: 'infer';
    /**
     * Default color for neutral UI elements. Most text, borders and backgrounds are defined as semi-transparent versions of this color, resulting in a blend between the background and foreground colours.
     */
    foregroundColor: 'infer';
    /**
     * Amount of spacing around and inside UI elements. All padding and margins in the grid are defined as a multiple of this value.
     */
    spacing: 'infer';
    /**
     * Background color for header and header-like.
     */
    headerBackgroundColor: 'infer';
    /**
     * Duration in seconds of the background color transition if headerCellHoverBackgroundColor or headerCellMovingBackgroundColor is set.
     */
    headerCellBackgroundTransitionDuration: 'infer';
    /**
     * Background color of a header cell when hovering over it, or `transparent` for no change.
     */
    headerCellHoverBackgroundColor: 'infer';
    /**
     * Background color of a header cell when dragging to reposition it, or `transparent` for no change.
     */
    headerCellMovingBackgroundColor: 'infer';
    /**
     * Vertical borders between columns within headers.
     */
    headerColumnBorder: 'infer';
    /**
     * Height of the vertical border between column headers. Percentage values are relative to the header height.
     */
    headerColumnBorderHeight: 'infer';
    /**
     * Color of the drag handle on resizable header columns. Set this to transparent to hide the resize handle.
     */
    headerColumnResizeHandleColor: 'infer';
    /**
     * Height of the drag handle on resizable header columns. Percentage values are relative to the header height.
     */
    headerColumnResizeHandleHeight: 'infer';
    /**
     * Width of the drag handle on resizable header columns.
     */
    headerColumnResizeHandleWidth: 'infer';
    /**
     * Font family of text in the header
     */
    headerFontFamily: 'infer';
    /**
     * Font family of text in grid cells
     */
    cellFontFamily: 'infer';
    /**
     * Size of text in the header
     */
    headerFontSize: 'infer';
    /**
     * Font weight of text in the header
     */
    headerFontWeight: 'infer';
    /**
     * Height of header rows. NOTE: by default this value is calculated to leave enough room for text, icons and padding. Most applications should leave it as is and use rowVerticalPaddingScale to change padding.
     */
    headerHeight: 'infer';
    /**
     * Borders between and below header rows.
     */
    headerRowBorder: 'infer';
    /**
     * Color of text in the header
     */
    headerTextColor: 'infer';
    /**
     * Multiply the header vertical padding by a number, e.g. 1.5 to increase by 50%
     */
    headerVerticalPaddingScale: 'infer';
    /**
     * Background color of clickable icons when hovered
     */
    iconButtonHoverBackgroundColor: 'infer';
    /**
     * Hover color for clickable icons
     */
    iconButtonHoverColor: 'infer';
    /**
     * The size of square icons and icon-buttons
     */
    iconSize: 'infer';
    /**
     * The color for inputs and UI controls in an invalid state.
     */
    invalidColor: 'infer';
    /**
     * Height of items in scrolling lists e.g. dropdown select inputs and column menu set filters.
     */
    listItemHeight: 'infer';
    /**
     * Background color for menus e.g. column menu and right-click context menu
     */
    menuBackgroundColor: 'infer';
    /**
     * Border around menus e.g. column menu and right-click context menu
     */
    menuBorder: 'infer';
    /**
     * Color of the dividing line between sections of menus e.g. column menu and right-click context menu
     */
    menuSeparatorColor: 'infer';
    /**
     * Shadow for menus e.g. column menu and right-click context menu
     */
    menuShadow: 'infer';
    /**
     * Text color for menus e.g. column menu and right-click context menu
     */
    menuTextColor: 'infer';
    /**
     * Background color of the overlay shown over the grid e.g. a data loading indicator.
     */
    modalOverlayBackgroundColor: 'infer';
    /**
     * Background color applied to every other row
     */
    oddRowBackgroundColor: 'infer';
    /**
     * Background color for panels and dialogs such as the integrated charts and the advanced filter builder.
     */
    panelBackgroundColor: 'infer';
    /**
     * Background color for the title bar of panels and dialogs such as the integrated charts and the advanced filter builder.
     */
    panelTitleBarBackgroundColor: 'infer';
    /**
     * Border below the title bar of panels and dialogs such as the integrated charts and the advanced filter builder.
     */
    panelTitleBarBorder: 'infer';
    /**
     * Vertical borders between columns that are pinned to the left or right and the rest of the grid
     */
    pinnedColumnBorder: 'infer';
    /**
     * Horizontal borders between the grid and rows that are pinned to the top or bottom and the rest of the grid
     */
    pinnedRowBorder: 'infer';
    /**
     * Default shadow for elements that float above the grid and are intended to appear separated from it e.g. dialogs and menus
     */
    popupShadow: 'infer';
    /**
     * Default shadow for elements that float above the grid and are intended to appear elevated byt still attached e.g. dropdowns and cell editors
     */
    cardShadow: 'infer';
    /**
     * Background color of selected cell ranges. Choosing a semi-transparent color ensure that multiple overlapping ranges look correct.
     */
    rangeSelectionBackgroundColor: 'infer';
    /**
     * The color used for borders around range selections. The selection background defaults to a semi-transparent version of this color.
     */
    rangeSelectionBorderColor: 'infer';
    /**
     * Border style around range selections.
     */
    rangeSelectionBorderStyle: 'infer';
    /**
     * Background color for cells that provide data to the current range chart
     */
    rangeSelectionChartBackgroundColor: 'infer';
    /**
     * Background color for cells that provide categories to the current range chart
     */
    rangeSelectionChartCategoryBackgroundColor: 'infer';
    /**
     * Background color to briefly apply to a cell range when the user copies from or pastes into it.
     */
    rangeSelectionHighlightColor: 'infer';
    /**
     * Horizontal borders between rows.
     */
    rowBorder: 'infer';
    /**
     * The size of indentation applied to each level of row grouping - deep rows are indented by a multiple of this value.
     */
    rowGroupIndentSize: 'infer';
    /**
     * Height of grid rows. NOTE: by default this value is calculated to leave enough room for text, icons and padding. Most applications should leave it as is and use rowVerticalPaddingScale to change padding.
     */
    rowHeight: 'infer';
    /**
     * Background color when hovering over rows in the grid and in dropdown menus. Set to `transparent` to disable the hover effect. Note: if you want a hover effect on one but not the other, use CSS selectors instead of this property.
     */
    rowHoverColor: 'infer';
    /**
     * Color of the skeleton loading effect used when loading row data with the Server-side Row Model
     */
    rowLoadingSkeletonEffectColor: 'infer';
    /**
     * Multiply the row vertical padding by a number, e.g. 1.5 to increase by 50%. Has no effect if rowHeight is set.
     */
    rowVerticalPaddingScale: 'infer';
    /**
     * Background color for selected items within the multiple select widget
     */
    selectCellBackgroundColor: 'infer';
    /**
     * Border for selected items within the multiple select widget
     */
    selectCellBorder: 'infer';
    /**
     * Background color of selected rows in the grid and in dropdown menus.
     */
    selectedRowBackgroundColor: 'infer';
    /**
     * Amount of indentation for each level of child items in the Set Filter list when filtering tree data.
     */
    setFilterIndentSize: 'infer';
    /**
     * Background color of the sidebar that contains the columns and filters tool panels
     */
    sideBarBackgroundColor: 'infer';
    /**
     * Background color of the row of tab buttons at the edge of the sidebar
     */
    sideButtonBarBackgroundColor: 'infer';
    /**
     * Default width of the sidebar that contains the columns and filters tool panels
     */
    sideBarPanelWidth: 'infer';
    /**
     * Borders between the grid and side panels including the column and filter tool bars, and chart settings
     */
    sidePanelBorder: 'infer';
    /**
     * Spacing between the topmost side button and the top of the sidebar
     */
    sideButtonBarTopPadding: 'infer';
    /**
     * Width of the underline below the selected tab in the sidebar
     */
    sideButtonSelectedUnderlineWidth: 'infer';
    /**
     * Color of the underline below the selected tab in the sidebar, or 'transparent' to disable the underline effect
     */
    sideButtonSelectedUnderlineColor: 'infer';
    /**
     * Duration of the transition effect for the underline below the selected tab in the sidebar
     */
    sideButtonSelectedUnderlineTransitionDuration: 'infer';
    /**
     * Background color of the tab buttons in the sidebar
     */
    sideButtonBackgroundColor: 'infer';
    /**
     * Text color of the tab buttons in the sidebar
     */
    sideButtonTextColor: 'infer';
    /**
     * Background color of the tab buttons in the sidebar when hovered
     */
    sideButtonHoverBackgroundColor: 'infer';
    /**
     * Text color of the tab buttons in the sidebar when hovered
     */
    sideButtonHoverTextColor: 'infer';
    /**
     * Background color of the selected tab button in the sidebar
     */
    sideButtonSelectedBackgroundColor: 'infer';
    /**
     * Text color of the selected tab button in the sidebar
     */
    sideButtonSelectedTextColor: 'infer';
    /**
     * Color of the border drawn above and below the selected tab button in the
     * sidebar, or 'transparent' to disable the border on the selected tab
     */
    sideButtonSelectedBorder: 'infer';
    /**
     * Padding to the left of the text in tab buttons in the sidebar (this is always the padding on the inward facing side of the button, so in right-to-left layout it will be on the right)
     */
    sideButtonLeftPadding: 'infer';
    /**
     * Padding to the right of the text in tab buttons in the sidebar (this is always the padding on the outward facing side of the button, so in right-to-left layout it will be on the left)
     */
    sideButtonRightPadding: 'infer';
    /**
     * Padding above and below the text in tab buttons in the sidebar
     */
    sideButtonVerticalPadding: 'infer';
    /**
     * Color of text and UI elements that should stand out less than the default.
     */
    subtleTextColor: 'infer';
    /**
     * Default color for all text
     */
    textColor: 'infer';
    /**
     * Width of the whole toggle button component
     */
    toggleButtonWidth: 'infer';
    /**
     * Height of the whole toggle button component
     */
    toggleButtonHeight: 'infer';
    /**
     * Color of the toggle button background in its 'off' state
     */
    toggleButtonOffBackgroundColor: 'infer';
    /**
     * Color of the toggle button background in its 'on' state
     */
    toggleButtonOnBackgroundColor: 'infer';
    /**
     * Background color of the toggle button switch (the bit that slides from left to right)
     */
    toggleButtonSwitchBackgroundColor: 'infer';
    /**
     * The amount that the toggle switch is inset from the edge of the button
     */
    toggleButtonSwitchInset: 'infer';
    /**
     * The dividing line between sections of menus e.g. column menu and right-click context menu
     */
    toolPanelSeparatorBorder: 'infer';
    /**
     * Background color for tooltips
     */
    tooltipBackgroundColor: 'infer';
    /**
     * Border for tooltips
     */
    tooltipBorder: 'infer';
    /**
     * Text color for tooltips
     */
    tooltipTextColor: 'infer';
    /**
     * Color to temporarily apply to cell data when its value decreases in an agAnimateShowChangeCellRenderer cell
     */
    valueChangeDeltaDownColor: 'infer';
    /**
     * Color to temporarily apply to cell data when its value increases in an agAnimateShowChangeCellRenderer cell
     */
    valueChangeDeltaUpColor: 'infer';
    /**
     * Background color to apply when a cell value changes and enableCellChangeFlash is enabled
     */
    valueChangeValueHighlightBackgroundColor: 'infer';
    /**
     * The horizontal padding of containers that contain stacked widgets, such as menus and tool panels
     */
    widgetContainerHorizontalPadding: 'infer';
    /**
     * The vertical padding of containers that contain stacked widgets, such as menus and tool panels
     */
    widgetContainerVerticalPadding: 'infer';
    /**
     * The spacing between widgets in containers arrange widgets horizontally
     */
    widgetHorizontalSpacing: 'infer';
    /**
     * The spacing between widgets in containers arrange widgets vertically
     */
    widgetVerticalSpacing: 'infer';
    /**
     * Borders around the outside of the grid
     */
    wrapperBorder: 'infer';
    /**
     * Corner radius of the outermost container around the grid.
     */
    wrapperBorderRadius: 'infer';
};
export type CoreParams = ExpandTypeKeys<WithParamTypes<CoreParamsDefinitions>>;
export declare const defaultLightColorSchemeParams: {
    readonly backgroundColor: "#fff";
    readonly foregroundColor: "#181d1f";
    readonly borderColor: import("../theme-types").ColorValue;
    readonly chromeBackgroundColor: import("../theme-types").ColorValue;
    readonly browserColorScheme: "light";
};
export declare const coreDefaults: Readonly<CoreParams>;
