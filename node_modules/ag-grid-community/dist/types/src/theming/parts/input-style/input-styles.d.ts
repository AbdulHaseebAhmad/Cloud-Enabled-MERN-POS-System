export type InputStyleParams = {
    /**
     * Background color for text inputs
     */
    inputBackgroundColor: 'infer';
    /**
     * Border around text inputs (or underneath, if using the underlined input style)
     */
    inputBorder: 'infer';
    /**
     * Corner radius of text inputs
     */
    inputBorderRadius: 'infer';
    /**
     * Background color for disabled text inputs
     */
    inputDisabledBackgroundColor: 'infer';
    /**
     * Border around disabled text inputs (or underneath, if using the underlined input style)
     */
    inputDisabledBorder: 'infer';
    /**
     * Color of text within disabled text inputs
     */
    inputDisabledTextColor: 'infer';
    /**
     * Background color for focussed text inputs
     */
    inputFocusBackgroundColor: 'infer';
    /**
     * Border around focussed text inputs (or underneath, if using the underlined input style)
     */
    inputFocusBorder: 'infer';
    /**
     * Shadow around focussed text inputs
     */
    inputFocusShadow: 'infer';
    /**
     * Color of text within focussed text inputs
     */
    inputFocusTextColor: 'infer';
    /**
     * Minimum height of text inputs
     */
    inputHeight: 'infer';
    /**
     * Background color for text inputs in an invalid state
     */
    inputInvalidBackgroundColor: 'infer';
    /**
     * Border around text inputs in an invalid state (or underneath, if using the underlined input style)
     */
    inputInvalidBorder: 'infer';
    /**
     * Color of text within text inputs in an invalid state
     */
    inputInvalidTextColor: 'infer';
    /**
     * Padding at the start of text in text inputs
     */
    inputPaddingStart: 'infer';
    /**
     * Color of text within text inputs
     */
    inputTextColor: 'infer';
    /**
     * Color of placeholder text in empty inputs describing the purpose of the input e.g. "Search..."
     */
    inputPlaceholderTextColor: 'infer';
    /**
     * Color of search icon within search text inputs
     */
    inputIconColor: 'infer';
};
export declare const inputStyleBase: import("../../Part").Part<{
    inputBackgroundColor: import("../../theme-types").ColorValue;
    inputBorder: import("../../theme-types").BorderValue;
    inputBorderRadius: import("../../theme-types").LengthValue;
    inputDisabledBackgroundColor: import("../../theme-types").ColorValue;
    inputDisabledBorder: import("../../theme-types").BorderValue;
    inputDisabledTextColor: import("../../theme-types").ColorValue;
    inputFocusBackgroundColor: import("../../theme-types").ColorValue;
    inputFocusBorder: import("../../theme-types").BorderValue;
    inputFocusShadow: import("../../theme-types").ShadowValue;
    inputFocusTextColor: import("../../theme-types").ColorValue;
    inputHeight: import("../../theme-types").LengthValue;
    inputInvalidBackgroundColor: import("../../theme-types").ColorValue;
    inputInvalidBorder: import("../../theme-types").BorderValue;
    inputInvalidTextColor: import("../../theme-types").ColorValue;
    inputPaddingStart: import("../../theme-types").LengthValue;
    inputTextColor: import("../../theme-types").ColorValue;
    inputPlaceholderTextColor: import("../../theme-types").ColorValue;
    inputIconColor: import("../../theme-types").ColorValue;
}>;
export declare const inputStyleBordered: import("../../Part").Part<{
    inputBackgroundColor: import("../../theme-types").ColorValue;
    inputBorder: import("../../theme-types").BorderValue;
    inputBorderRadius: import("../../theme-types").LengthValue;
    inputPaddingStart: import("../../theme-types").LengthValue;
    inputFocusBorder: import("../../theme-types").BorderValue;
    inputFocusShadow: import("../../theme-types").ShadowValue;
    inputDisabledBackgroundColor: import("../../theme-types").ColorValue;
    inputDisabledTextColor: import("../../theme-types").ColorValue;
    inputInvalidBorder: import("../../theme-types").BorderValue;
    inputDisabledBorder: import("../../theme-types").BorderValue;
    inputFocusBackgroundColor: import("../../theme-types").ColorValue;
    inputFocusTextColor: import("../../theme-types").ColorValue;
    inputHeight: import("../../theme-types").LengthValue;
    inputInvalidBackgroundColor: import("../../theme-types").ColorValue;
    inputInvalidTextColor: import("../../theme-types").ColorValue;
    inputTextColor: import("../../theme-types").ColorValue;
    inputPlaceholderTextColor: import("../../theme-types").ColorValue;
    inputIconColor: import("../../theme-types").ColorValue;
}>;
export declare const inputStyleUnderlined: import("../../Part").Part<{
    inputBorder: import("../../theme-types").BorderValue;
    inputPaddingStart: import("../../theme-types").LengthValue;
    inputFocusBorder: import("../../theme-types").BorderValue;
    inputDisabledTextColor: import("../../theme-types").ColorValue;
    inputDisabledBorder: import("../../theme-types").BorderValue;
    inputInvalidBorder: import("../../theme-types").BorderValue;
    inputBackgroundColor: import("../../theme-types").ColorValue;
    inputBorderRadius: import("../../theme-types").LengthValue;
    inputDisabledBackgroundColor: import("../../theme-types").ColorValue;
    inputFocusBackgroundColor: import("../../theme-types").ColorValue;
    inputFocusShadow: import("../../theme-types").ShadowValue;
    inputFocusTextColor: import("../../theme-types").ColorValue;
    inputHeight: import("../../theme-types").LengthValue;
    inputInvalidBackgroundColor: import("../../theme-types").ColorValue;
    inputInvalidTextColor: import("../../theme-types").ColorValue;
    inputTextColor: import("../../theme-types").ColorValue;
    inputPlaceholderTextColor: import("../../theme-types").ColorValue;
    inputIconColor: import("../../theme-types").ColorValue;
}>;
