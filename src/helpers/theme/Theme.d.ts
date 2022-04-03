import { colors } from '@wakacje/design-system'
import materialTheme from './materialTheme'

declare module '@material-ui/core' {
  interface Theme {
    colors: typeof colors,
  }

  declare module 'styled-components' {
    interface DefaultTheme extends Theme {
      colors: typeof colors,
      materialTheme: typeof materialTheme
    }
  }
}
