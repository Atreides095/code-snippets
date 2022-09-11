import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './sidebar';
import SnippetsArea from './snippetsArea';

const Layout = ({ children, title, description }) => {
    return (
        <Box bg="gray.50">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content="Erick Aguilar" />
            </Head>
            <Flex direction="row">
                <Sidebar />
                <SnippetsArea />
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
