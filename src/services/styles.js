const size = {
  desktop: '980px',
  mobile: '600px',
}

export const device = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `
  return acc
}, {})
