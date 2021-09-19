export const sharedBaseStyle = {
  // Write here some shared `base style` between Link and Button components
}

const SharedBtnStyle = {
  fontWeight: '700',
}

export const primary = {
  primary: {
    bg: 'primary.teal',
    color: 'white',
    ...SharedBtnStyle,
    _hover: {
      bg: 'primary.teal_hover',
    },
  },
}

// Add new shared variants here and don't forget to import them inside > theme/components/`component`.js
