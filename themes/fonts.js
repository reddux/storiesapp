const type = {
  base: 'Bookerly-Regular',
  bold: 'Bookerly-Bold',
  emphasis: 'Bookerly-RegularItalic',
  base_alt: 'Roboto',
  bold_alt: 'Roboto-Bold'
}

const size = {
  lineHeight: 1.4,
  h1: 18,
  h2: 16,
  h3: 14,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
    lineHeight: size.h1 * size.lineHeight,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
    lineHeight: size.h2 * size.lineHeight,
  },
  h3: {
    fontFamily: type.base_alt,
    fontSize: size.h3,
    lineHeight: size.h3 * size.lineHeight,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
    lineHeight: size.regular * size.lineHeight,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
    lineHeight: size.medium * size.lineHeight,
  }
}

export default {
  type,
  size,
  style
}