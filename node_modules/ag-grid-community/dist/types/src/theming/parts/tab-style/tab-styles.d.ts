export type TabStyleParams = {
    /**
     * Background color of tabs
     */
    tabBackgroundColor: 'infer';
    /**
     * Background color of the container for tabs
     */
    tabBarBackgroundColor: 'infer';
    /**
     * Border below the container for tabs
     */
    tabBarBorder: 'infer';
    /**
     * Padding at the left and right of the container for tabs
     */
    tabBarHorizontalPadding: 'infer';
    /**
     * Padding at the top of the container for tabs
     */
    tabBarTopPadding: 'infer';
    /**
     * Padding at the bottom of the container for tabs
     */
    tabBottomPadding: 'infer';
    /**
     * Padding inside the top and bottom sides of the container for tabs
     */
    tabHorizontalPadding: 'infer';
    /**
     * Background color of tabs when hovered over
     */
    tabHoverBackgroundColor: 'infer';
    /**
     * Color of text within tabs when hovered over
     */
    tabHoverTextColor: 'infer';
    /**
     * Background color of selected tabs
     */
    tabSelectedBackgroundColor: 'infer';
    /**
     * Color of the border around selected tabs
     */
    tabSelectedBorderColor: 'infer';
    /**
     * Width of the border around selected tabs
     */
    tabSelectedBorderWidth: 'infer';
    /**
     * Color of text within the selected tabs
     */
    tabSelectedTextColor: 'infer';
    /**
     * Color of line drawn under selected tabs
     */
    tabSelectedUnderlineColor: 'infer';
    /**
     * Duration in seconds of the fade in/out transition for the line drawn under selected tabs
     */
    tabSelectedUnderlineTransitionDuration: 'infer';
    /**
     * Width of line drawn under selected tabs
     */
    tabSelectedUnderlineWidth: 'infer';
    /**
     * Spacing between tabs
     */
    tabSpacing: 'infer';
    /**
     * Color of text within tabs
     */
    tabTextColor: 'infer';
    /**
     * Padding at the top of the container for tabs
     */
    tabTopPadding: 'infer';
};
/**
 * This base tab style adds no visual styling, it provides a base upon which a
 * tab style can be built by setting the tab-related params
 */
export declare const tabStyleBase: import("../../Part").Part<{
    tabBackgroundColor: import("../../theme-types").ColorValue;
    tabBarBackgroundColor: import("../../theme-types").ColorValue;
    tabBarBorder: import("../../theme-types").BorderValue;
    tabBarHorizontalPadding: import("../../theme-types").LengthValue;
    tabBarTopPadding: import("../../theme-types").LengthValue;
    tabBottomPadding: import("../../theme-types").LengthValue;
    tabHorizontalPadding: import("../../theme-types").LengthValue;
    tabHoverBackgroundColor: import("../../theme-types").ColorValue;
    tabHoverTextColor: import("../../theme-types").ColorValue;
    tabSelectedBackgroundColor: import("../../theme-types").ColorValue;
    tabSelectedBorderColor: import("../../theme-types").ColorValue;
    tabSelectedBorderWidth: import("../../theme-types").LengthValue;
    tabSelectedTextColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineTransitionDuration: import("../../theme-types").DurationValue;
    tabSelectedUnderlineWidth: import("../../theme-types").LengthValue;
    tabSpacing: import("../../theme-types").LengthValue;
    tabTextColor: import("../../theme-types").ColorValue;
    tabTopPadding: import("../../theme-types").LengthValue;
}>;
/**
 * Tabs styled for the Quartz theme
 */
export declare const tabStyleQuartz: import("../../Part").Part<{
    tabBarBorder: import("../../theme-types").BorderValue;
    tabBarBackgroundColor: import("../../theme-types").ColorValue;
    tabTextColor: import("../../theme-types").ColorValue;
    tabSelectedTextColor: import("../../theme-types").ColorValue;
    tabHoverTextColor: import("../../theme-types").ColorValue;
    tabSelectedBorderColor: import("../../theme-types").ColorValue;
    tabSelectedBackgroundColor: import("../../theme-types").ColorValue;
    tabBackgroundColor: import("../../theme-types").ColorValue;
    tabBarHorizontalPadding: import("../../theme-types").LengthValue;
    tabBarTopPadding: import("../../theme-types").LengthValue;
    tabBottomPadding: import("../../theme-types").LengthValue;
    tabHorizontalPadding: import("../../theme-types").LengthValue;
    tabHoverBackgroundColor: import("../../theme-types").ColorValue;
    tabSelectedBorderWidth: import("../../theme-types").LengthValue;
    tabSelectedUnderlineColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineTransitionDuration: import("../../theme-types").DurationValue;
    tabSelectedUnderlineWidth: import("../../theme-types").LengthValue;
    tabSpacing: import("../../theme-types").LengthValue;
    tabTopPadding: import("../../theme-types").LengthValue;
}>;
/**
 * Tabs styled for the Material theme
 */
export declare const tabStyleMaterial: import("../../Part").Part<{
    tabBarBackgroundColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineWidth: import("../../theme-types").LengthValue;
    tabSelectedUnderlineTransitionDuration: import("../../theme-types").DurationValue;
    tabBackgroundColor: import("../../theme-types").ColorValue;
    tabBarBorder: import("../../theme-types").BorderValue;
    tabBarHorizontalPadding: import("../../theme-types").LengthValue;
    tabBarTopPadding: import("../../theme-types").LengthValue;
    tabBottomPadding: import("../../theme-types").LengthValue;
    tabHorizontalPadding: import("../../theme-types").LengthValue;
    tabHoverBackgroundColor: import("../../theme-types").ColorValue;
    tabHoverTextColor: import("../../theme-types").ColorValue;
    tabSelectedBackgroundColor: import("../../theme-types").ColorValue;
    tabSelectedBorderColor: import("../../theme-types").ColorValue;
    tabSelectedBorderWidth: import("../../theme-types").LengthValue;
    tabSelectedTextColor: import("../../theme-types").ColorValue;
    tabSpacing: import("../../theme-types").LengthValue;
    tabTextColor: import("../../theme-types").ColorValue;
    tabTopPadding: import("../../theme-types").LengthValue;
}>;
/**
 * Tabs styled for the Alpine theme
 */
export declare const tabStyleAlpine: import("../../Part").Part<{
    tabBarBorder: import("../../theme-types").BorderValue;
    tabBarBackgroundColor: import("../../theme-types").ColorValue;
    tabHoverTextColor: import("../../theme-types").ColorValue;
    tabSelectedTextColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineWidth: import("../../theme-types").LengthValue;
    tabSelectedUnderlineTransitionDuration: import("../../theme-types").DurationValue;
    tabBackgroundColor: import("../../theme-types").ColorValue;
    tabBarHorizontalPadding: import("../../theme-types").LengthValue;
    tabBarTopPadding: import("../../theme-types").LengthValue;
    tabBottomPadding: import("../../theme-types").LengthValue;
    tabHorizontalPadding: import("../../theme-types").LengthValue;
    tabHoverBackgroundColor: import("../../theme-types").ColorValue;
    tabSelectedBackgroundColor: import("../../theme-types").ColorValue;
    tabSelectedBorderColor: import("../../theme-types").ColorValue;
    tabSelectedBorderWidth: import("../../theme-types").LengthValue;
    tabSpacing: import("../../theme-types").LengthValue;
    tabTextColor: import("../../theme-types").ColorValue;
    tabTopPadding: import("../../theme-types").LengthValue;
}>;
/**
 * Tabs where the selected tab appears raised and attached the the active
 * content, like a rolodex or operating system tabs.
 */
export declare const tabStyleRolodex: import("../../Part").Part<{
    tabBarBackgroundColor: import("../../theme-types").ColorValue;
    tabBarHorizontalPadding: import("../../theme-types").LengthValue;
    tabBarTopPadding: import("../../theme-types").LengthValue;
    tabBarBorder: import("../../theme-types").BorderValue;
    tabHorizontalPadding: import("../../theme-types").LengthValue;
    tabTopPadding: import("../../theme-types").LengthValue;
    tabBottomPadding: import("../../theme-types").LengthValue;
    tabSpacing: import("../../theme-types").LengthValue;
    tabSelectedBorderColor: import("../../theme-types").ColorValue;
    tabSelectedBackgroundColor: import("../../theme-types").ColorValue;
    tabBackgroundColor: import("../../theme-types").ColorValue;
    tabHoverBackgroundColor: import("../../theme-types").ColorValue;
    tabHoverTextColor: import("../../theme-types").ColorValue;
    tabSelectedBorderWidth: import("../../theme-types").LengthValue;
    tabSelectedTextColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineColor: import("../../theme-types").ColorValue;
    tabSelectedUnderlineTransitionDuration: import("../../theme-types").DurationValue;
    tabSelectedUnderlineWidth: import("../../theme-types").LengthValue;
    tabTextColor: import("../../theme-types").ColorValue;
}>;
