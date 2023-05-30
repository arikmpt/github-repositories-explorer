import { CSSProperties, LegacyRef, forwardRef } from 'react'
import { SerializedStyles } from '@emotion/react'
import type {
  TokenColor,
  TokenFontSize,
  TokenFontWeight,
  TokenLetterSpacing,
  TokenLineHeight,
  TokenSpacing,
} from '@interfaces/token'
import styles from './styles'

export interface TextProps {
  children?: string;
  variant?: TokenFontWeight;
  size?: TokenFontSize;
  color?: TokenColor;
  transform?: 'uppercase' | 'lowercase';
  fontFamily?: 'roboto';
  wordSpacing?: TokenSpacing;
  /**
   * @param {number} lineClamp
   * Used to truncate lines of words.
   * If you want to truncate 1 long word, you need to use `truncateWord` props
   */
  lineClamp?: number;
  /**
   * @param {boolean} truncateWord
   * Used to truncateWord 1 long word.
   */
  truncateWord?: boolean;
  /**
   * @param {boolean} showTextOnMouseOver
   * Used to show children value as title when user mouse over the component
   */
  showTextOnMouseOver?: boolean;
  lineHeight?: TokenLineHeight;
  opacity?: number;
  align?: 'center' | 'left' | 'right';
  isHtml?: boolean;
  letterSpacing?: TokenLetterSpacing;
  decoration?: 'line-through' | 'underline';
  customStyles?: SerializedStyles | SerializedStyles[];
  whiteSpace?: CSSProperties['whiteSpace'];
  fontStyle?: CSSProperties['fontStyle'];
  wordBreak?: CSSProperties['wordBreak'];
}

const Text = forwardRef(function TextWithRef(props: TextProps, ref?: LegacyRef<HTMLDivElement>) {
  const {
    children,
    variant = 'regular',
    size = 's',
    color,
    opacity,
    transform,
    fontFamily = 'text',
    wordSpacing,
    lineClamp,
    truncateWord,
    showTextOnMouseOver,
    align,
    letterSpacing,
    decoration,
    lineHeight = 'initial',
    whiteSpace,
    customStyles,
    fontStyle,
    wordBreak,
  } = props

  const properties = {
    ref: ref,
    css: [
      styles.variant(variant),
      styles.size(size),
      styles.lineHeight(lineHeight),
      fontFamily && styles.fontFamily,
      color && styles.color(color),
      opacity && styles.opacity(opacity),
      transform && styles.transform(transform),
      wordSpacing && styles.wordSpacing(wordSpacing),
      lineClamp && styles.lineClamp(lineClamp),
      align && styles.align(align),
      letterSpacing && styles.letterSpacing(letterSpacing),
      decoration && styles.decoration(decoration),
      truncateWord && styles.truncateWord,
      whiteSpace && styles.whiteSpace(whiteSpace),
      fontStyle && styles.fontStyle(fontStyle),
      wordBreak && styles.wordBreak(wordBreak),
      customStyles,
    ],
    ...(showTextOnMouseOver
      ? [
          {
            title: children,
          },
        ]
      : ''),
  };

  return <div {...properties}>{children}</div>;
});

export default Text;