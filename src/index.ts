import plugin from 'tailwindcss/plugin'

export interface Options {
  selector?: string
}

export default function wh(options: Options = {}) {
  const selector = options.selector ?? 'wh'

  return plugin(({ matchUtilities, theme }) => {
    matchUtilities({
      [selector]: value => ({
        width: value,
        height: value,
      }),
    }, {
      values: theme('width'),
    })
  })
}
