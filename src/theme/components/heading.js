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
      fontSize: '80px',
      letterSpacing: '-2px',
      lineHeight: '90px',
    },
    h2: {
      fontSize: '40px',
      letterSpacing: '-1px',
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
