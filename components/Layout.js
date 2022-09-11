import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Layout = ({ children, title, description }) => {
    return (
        <Box as="main" bg="gray.200">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content="Erick Aguilar" />
            </Head>
            <Flex direction="row">
                <Sidebar />
                {children}
            </Flex>
        </Box>
    );
};

export default Layout;

Layout.defaultProps = {
    title: 'Code Snippets',
    description: 'A web app to easily save snippets of code',
};
