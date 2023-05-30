import { ForwardedRef, KeyboardEventHandler, forwardRef } from 'react';
import { TextField as MaterialUITextField, StandardTextFieldProps } from '@mui/material';
import { HelperText } from '@components/commons';
import type { StyleProps } from '@interfaces/common';
import type {
  TokenBorderRadius,
  TokenColor,
  TokenFontSize,
  TokenFontWeight,
  TokenSpacing,
} from '@interfaces/token';
import { Card } from '..';
import styles from './styles';

export interface TextFieldProps {
  /**
   * @param {string} id
   * Set value for element ID
   */
  id?: string;
  placeholder?: string;
  value?: string | number;
  variant?: 'outlined' | 'filled';
  borderVariant?: TokenBorderRadius;
  defaultValue?: string | number;
  fontSize?: TokenFontSize;
  onChange?: StandardTextFieldProps['onChange'];
  onClick?: StandardTextFieldProps['onClick'];
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onBlur?: StandardTextFieldProps['onBlur'];
  onMouseOver?: StandardTextFieldProps['onMouseOver'];
  onMouseLeave?: StandardTextFieldProps['onMouseLeave'];
  onFocus?: StandardTextFieldProps['onFocus'];
  onPaste?: StandardTextFieldProps['onPaste'];
  customStyles?: StyleProps;
  autoFocus?: boolean;
  type?: 'password' | 'number';
  error?: boolean;
  helperText?: string;
  helperTextPosition?: 'relative' | 'absolute';
  isLoading?: boolean;
  inputProps?: StandardTextFieldProps['inputProps'];
  disabled?: boolean;
  InputProps?: Partial<StandardTextFieldProps>['InputProps'];
  inputRef?: React.Ref<HTMLDivElement>;
  name?: string;
  placeholderColor?: TokenColor;
  borderColor?: TokenColor;
  borderHoverColor?: TokenColor;
  backgroundColor?: TokenColor;
  backgroundColorDisabled?: TokenColor;
  fontWeight?: TokenFontWeight;
  multiline?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  /**
   * @param {'off' | 'on'} autoComplete
   * When enabled, it will show previously saved autofill options from user browser
   */
  autoComplete?: 'off' | 'on';
  textAlign?: 'left' | 'center' | 'right';
  paddingVertical?: TokenSpacing;
  paddingHorizontal?: TokenSpacing;
}

export type TextFieldRef = HTMLInputElement | HTMLTextAreaElement;

const TextField = forwardRef(function TextFieldWithRef(props: TextFieldProps, ref?: ForwardedRef<TextFieldRef>) {
  const {
    id,
    placeholder,
    value,
    defaultValue,
    fontSize = 's',
    multiline = false,
    onChange,
    onClick,
    onKeyDown,
    onBlur,
    onMouseOver,
    onMouseLeave,
    onFocus,
    onPaste,
    customStyles = {},
    autoFocus = false,
    type,
    error = false,
    helperText = '',
    helperTextPosition,
    isLoading = false,
    inputProps = {},
    disabled = false,
    InputProps = {},
    inputRef,
    variant = 'outlined',
    borderVariant = 'small',
    placeholderColor = 'labelPlaceholder',
    borderColor,
    borderHoverColor,
    backgroundColor,
    backgroundColorDisabled,
    name = '',
    rows = undefined,
    minRows = undefined,
    maxRows = undefined,
    autoComplete = 'off',
    fontWeight = 'medium',
    textAlign,
    paddingVertical,
    paddingHorizontal,
  } = props;

  return (
    <Card direction={'column'} grow={1} gap={'xs'}>
      <MaterialUITextField
        autoComplete={autoComplete}
        id={id}
        ref={inputRef}
        /**
         * NOTE: Need to manually onfocus because material ui
         * Read: https://stackoverflow.com/questions/37949394/how-to-set-focus-to-a-materialui-textfield
         * But this cause issue if there is more than 1 Textfield
         */
        // inputRef={ref => autoFocus ? ref && ref.focus() : ref}
        inputRef={ref}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        multiline={multiline}
        onBlur={onBlur}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onPaste={onPaste}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onChange={onChange}
        error={error}
        disabled={disabled}
        autoFocus={autoFocus}
        type={type}
        rows={rows}
        minRows={minRows}
        maxRows={maxRows}
        css={[
          styles.container,
          textAlign && styles.textAlign(textAlign),
          fontWeight && styles.fontWeight(fontWeight),
          multiline && styles.containerMultiline,
          styles.color(backgroundColorDisabled),
          styles.borderVariant(borderVariant),
          styles.inputWithLoading(isLoading),
          styles.fontSize(fontSize),
          styles.helperTextPosition(helperTextPosition),
          placeholderColor && styles.placeholderColor(placeholderColor),
          backgroundColor && styles.backgroundColor(backgroundColor),
          borderColor && styles.borderColor(borderColor),
          borderHoverColor && styles.borderHoverColor(borderHoverColor),
          paddingVertical && styles.paddingVertical(paddingVertical),
          paddingHorizontal && styles.paddingHorizontal(paddingHorizontal),
          customStyles,
        ]}
        inputProps={inputProps}
        variant={variant}
        InputProps={
            {
                ...InputProps,
                name: name,
            }
        }
      />

      <HelperText helperText={helperText} error={error} />
    </Card>
  );
});

export default TextField;