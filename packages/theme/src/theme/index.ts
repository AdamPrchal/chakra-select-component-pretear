import {extendTheme, theme as baseTheme, ThemeConfig, ThemeDirection} from '@chakra-ui/react'
import { Select } from './components'

const direction: ThemeDirection = 'ltr'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

const theme = extendTheme({
  config,
  direction,
  components: {
    ...baseTheme.components,
    Select
  },
})

export default theme;
