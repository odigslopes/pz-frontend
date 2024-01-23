import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('white', '#2D3748')(props),
        input: mode('red', 'green')(props),
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        color: '#72727e',
      },
    },
    Text: {
      baseStyle: {
        color: '#9893da',
      },
    },
  },
});
