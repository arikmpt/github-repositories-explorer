import Token from '@constants/token';
import { css } from '@emotion/react';
import type {
  TokenBorderRadius,
  TokenColor,
  TokenFontSize,
  TokenFontWeight,
  TokenSpacing,
} from '@interfaces/token';
import type { TextFieldProps } from '.';

const container = css`
  .MuiInputBase-root {
    padding: ${Token.spacing.xs}px ${Token.spacing.m}px;
    height: 40px;
  }

  .MuiInputBase-root.Mui-disabled,
  .MuiInputBase-root.Mui-disabled input {
    cursor: not-allowed;
    -webkit-text-fill-color: ${Token.color.contentDisabled};
    color: ${Token.color.contentDisabled};
    background-color: ${Token.color.disabled};
  }
  .MuiInputBase-input {
    padding: 0;
    line-height: initial;

    ::-webkit-input-placeholder,
    :-ms-input-placeholder,
    ::placeholder {
      font-size: ${Token.fontSize.s}px;
      color: ${Token.color.labelPlaceholder};
      opacity: 0.5;
    }
  }
  &.MuiFormControl-root {
    width: 100%;
  }
  & .MuiInputBase-input {
    font-size: ${Token.fontSize.s}px;
    width: 100%;
  }
  & .MuiAutocomplete-clearIndicator {
    display: none;
  }

  .MuiFilledInput-underline:after {
    border-bottom-width: 1px;
  }
  .MuiFilledInput-underline.Mui-focused:after {
    border-bottom-width: 2px;
  }

  .MuiFormHelperText-contained {
    margin: 0;
  }

  .MuiOutlinedInput-notchedOutline {
    top: 0;
    legend {
      display: none;
    }
  }
`;

const containerMultiline = css`
  .MuiInputBase-root {
    padding: ${Token.spacing.hs}px ${Token.spacing.m}px;
    height: auto;
  }
`;

const borderVariant = (value: TokenBorderRadius) => css`
  .MuiInputBase-root {
    border-radius: ${Token.borderRadius?.[value]};
  }
`;

const color = (backgroundColorDisabled?: TokenColor) => {
  const inputColor = {
    default: Token.color.inputBorder,
    focus: Token.color.inputBorder,
    error: Token.color.error,
    border: Token.color.inputBorder,
    disabledBorder: Token.color.backgroundGrey,
    disabled: backgroundColorDisabled ? Token.color?.[backgroundColorDisabled] : Token.color.disabled,
    filledBackground: Token.color.white,
  };

  return css`
    .MuiFilledInput-underline:before {
      border-color: ${inputColor.default};
    }
    .MuiFilledInput-underline:after {
      border-color: ${inputColor.focus};
    }
    .MuiFilledInput-root {
      background-color: ${inputColor.filledBackground};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${inputColor.default};
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${inputColor.default};
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${inputColor.focus};
    }
    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: ${inputColor.error} !important;
    }
    .MuiFilledInput-underline.Mui-error:after {
      border-color: ${inputColor.error};
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${inputColor.border};
    }
    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: ${inputColor.disabledBorder};
    }
    .Mui-disabled {
      background-color: ${inputColor.disabled};
    }
    .MuiInputBase-root.Mui-disabled,
    .MuiInputBase-root.Mui-disabled input {
      background-color: ${inputColor.disabled} !important;
    }
  `;
};

const backgroundColor = (colorType: TokenColor) => {
  const color = Token.color[colorType];

  return css`
    .MuiInputBase-root {
      background-color: ${color};
    }
    .MuiFilledInput-root {
      background-color: ${color};
    }
  `;
};

const backgroundColorDisabled = (colorType: TokenColor) => {
  const color = Token.color[colorType];

  return css`
    .MuiInputBase-root {
      background-color: ${color};
    }
    .MuiFilledInput-root {
      background-color: ${color};
    }
  `;
};

const borderColor = (colorType: TokenColor) => {
  const color = Token.color[colorType];

  return css`
    .MuiOutlinedInput-notchedOutline {
      border-color: ${color} !important;
    }
    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: ${color} !important;
    }
  `;
};

const borderHoverColor = (colorType: TokenColor) => {
  const color = Token.color[colorType];

  return css`
    .MuiOutlinedInput-root&:hover fieldset {
      border-color: ${color};
    }
  `;
};

const placeholderColor = (colorType: TokenColor) => css`
  .MuiInputBase-input {
    ::placeholder {
      color: ${Token.color[colorType]};
    }
  }
`;

const inputWithLoading = (isLoading: boolean) => {
  if (isLoading) {
    return css`
      & .MuiInputBase-input {
        padding-right: 20px;
      }
    `;
  }

  return {};
};

const fontSize = (sizeKey: TokenFontSize) => css`
  & .MuiInputBase-input {
    font-size: ${Token.fontSize[sizeKey]}px;
  }

  & .MuiInputBase-input {
    ::-webkit-input-placeholder,
    :-ms-input-placeholder,
    ::placeholder {
      font-size: ${Token.fontSize[sizeKey]}px;
    }
  }
`;

const helperTextPosition = (value: 'relative' | 'absolute' = 'relative') => {
  if (value === 'absolute') {
    return css`
      .MuiFormHelperText-root.Mui-error {
        position: absolute;
        bottom: -${Token.spacing.xl}px;
      }
    `;
  }

  return '';
};

const fontWeight = (typeValue: TokenFontWeight) => {
  const fontWeightValue = Token.fontWeight[typeValue];

  return css`
    & .MuiInputBase-input {
      font-weight: ${fontWeightValue};
    }
  `;
};

const textAlign = (value: TextFieldProps['textAlign']) => css`
  .MuiInputBase-input {
    text-align: ${value};
  }
`;

const paddingVertical = (value: TokenSpacing) => css`
  .MuiInputBase-root {
    padding-top: ${Token.spacing?.[value]}px;
    padding-bottom: ${Token.spacing?.[value]}px;
  }
`;

const paddingHorizontal = (value: TokenSpacing) => css`
  .MuiInputBase-root {
    padding-left: ${Token.spacing?.[value]}px;
    padding-right: ${Token.spacing?.[value]}px;
  }
`;

const styles = {
  container,
  containerMultiline,
  borderVariant,
  fontSize,
  inputWithLoading,
  helperTextPosition,
  color,
  backgroundColor,
  backgroundColorDisabled,
  borderColor,
  borderHoverColor,
  placeholderColor,
  fontWeight,
  textAlign,
  paddingVertical,
  paddingHorizontal,
};

export default styles;