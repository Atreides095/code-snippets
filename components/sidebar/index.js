import { Box, Button, Heading, Link, VStack } from '@chakra-ui/react';
import { AiOutlineUnorderedList, AiFillStar } from 'react-icons/ai';
import { FaLayerGroup } from 'react-icons/fa';
import { BsFillTagsFill } from 'react-icons/bs';
import { GoCode } from 'react-icons/go';

import NextLink from 'next/link';
import SidebarItem from './SidebarItem';
import SidebarSection from './sidebarSection';

const Logo = () => (
    <NextLink href="/" passHref>
        <Link>
            <Heading
                as="h1"
                color="white"
                size="lg"
                fontFamily="'Roboto', sans-serif"
            >
                CodeSnippets
            </Heading>
        </Link>
    </NextLink>
);

const Sidebar = () => {
    return (
        <VStack
            as="aside"
            color="gray.50"
            h="100vh"
            w={80}
            paddingBlockStart={8}
            bg="gray.800"
        >
            <Logo />
            <Box w="full" px={8} py={6}>
                <Button
                    variant="solid"
                    colorScheme="cyan"
                    color="gray.50"
                    rounded="sm"
                    size="lg"
                    w="full"
                >
                    NEW SNIPPET
                </Button>
            </Box>
            <VStack w="full" spacing={6} flex={1} overflowY="auto">
                <VStack w="full" spacing={0}>
                    <SidebarItem
                        icon={AiOutlineUnorderedList}
                        text="All Snippets"
                        count={0}
                    />
                    <SidebarItem icon={AiFillStar} text="Bookmarks" count={0} />
                </VStack>
                <SidebarSection
                    sectionIcon={FaLayerGroup}
                    sectionTitle="COLLECTIONS"
                >
                    <SidebarItem text="collection Item" count={0} />
                    <SidebarItem text="collection Item" count={0} />
                    <SidebarItem text="collection Item" count={0} />
                    <SidebarItem text="collection Item" count={0} />
                    <SidebarItem text="collection Item" count={0} />
                </SidebarSection>
                <SidebarSection
                    sectionIcon={BsFillTagsFill}
                    sectionTitle="TAGS"
                >
                    <SidebarItem text="tag Item" count={0} />
                    <SidebarItem text="tag Item" count={0} />
                    <SidebarItem text="tag Item" count={0} />
                    <SidebarItem text="tag Item" count={0} />
                    <SidebarItem text="tag Item" count={0} />
                </SidebarSection>
                <SidebarSection sectionIcon={GoCode} sectionTitle="LANGUAGES">
                    <SidebarItem text="language item" count={0} />
                    <SidebarItem text="language item" count={0} />
                    <SidebarItem text="language item" count={0} />
                    <SidebarItem text="language item" count={0} />
                    <SidebarItem text="language item" count={0} />
                </SidebarSection>
            </VStack>
            <Box bg="blackAlpha.500" w="full" h={20} bottom={0}></Box>
        </VStack>
    );
};

export default Sidebar;
