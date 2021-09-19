import { sharedBaseStyle, primary } from './sharedStyleLinkButton'

const button = {
  baseStyle: {
    ...sharedBaseStyle,
  },
  sizes: {
    sm: {},
    md: { py: '22px', px: '30px' },
    lg: {
      py: '30px',
      px: '40px',
      fontSize: '20px',
      borderRadius: 'lg',
    },
  },
  variants: {
    ...primary,
    black: {
      bg: 'primary.blackpurple',
      color: 'white',
    },
    // Add here the shared variants from the sharedStyleLinkButton.js
  },
  defaultProps: {
    size: 'md',
    // variant: 'light',
  },
}

export default button
