const heading = {
  // style object for base or default style
  baseStyle: {
    color: 'primary.black',
    fontWeight: '700',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: {
      // you can also use responsive styles
      fontSize: ['42px', , '42px', , '80px'],
      letterSpacing: { base: '-1.05px', lg: '-2px' },
      lineHeight: { base: '48px', lg: '90px' },
    },
    h2: {
      fontSize: ['28px', , '28px', , '40px'],
      letterSpacing: { base: '-0.7px', lg: '-1px' },
      lineHeight: '48px',
    },
    h3: {
      fontSize: '22px',
      letterSpacing: 0,
      lineHeight: 'auto',
    },
    h4: {
      fontSize: '16px',
      letterSpacing: '-0.25px',
      lineHeight: 'auto',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
}

export default heading
