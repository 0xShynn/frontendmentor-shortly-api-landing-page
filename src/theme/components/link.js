import { sharedBaseStyle, primary } from './sharedStyleLinkButton'

const link = {
  baseStyle: {
    ...sharedBaseStyle,
    rounded: 'full',
    fontWeight: '700',
    _hover: {
      textDecoration: 'none',
    },
  },
  sizes: {
    none: {},
    sm: {
      py: '8px',
      px: '28px',
      fontSize: '15px',
    },
    md: {
      py: '14px',
      px: '42px',
      fontSize: '20px',
    },
    lg: {},
  },
  variants: {
    ...primary,
    unstyled: {},
    // Add here the shared variants from the sharedStyleLinkButton.js
  },
  defaultProps: {
    // size: 'md',
    // variant: 'light',
  },
}

export default link
