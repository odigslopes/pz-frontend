import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        height: '100vh',
        bg: mode('#086788', '#2D3748')(props),
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        color: '#FCF7F8',
      },
    },
    Text: {
      baseStyle: {
        color: '#FCF7F8',
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: 'md',
        color: '#FCF7F8',
      },
    },
  },
});
