import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        fonts: {},
    },
    fonts: {
        body: `'Roboto', sans-serif`,
    },
    components: {
        Heading: {
            baseStyle: {
                fontFamily: `'Roboto', sans-serif`,
            },
        },
    },
});

export default theme;
