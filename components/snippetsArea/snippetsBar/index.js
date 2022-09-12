import {
    VStack,
    Box,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import Card from './Card';

const SnippetsBar = () => {
    return (
        <VStack
            w={80}
            h="100vh"
            borderInlineEnd="solid 2px"
            borderInlineEndColor="gray.400"
            align="center"
            spacing={0}
            flexShrink={0}
            bg="gray.200"
        >
            <VStack
                w="full"
                h={24}
                align="center"
                pt={4}
                pb={2}
                px={4}
                borderBlockEnd="2px solid"
                borderBlockEndColor="gray.400"
            >
                <Heading as="h2" size="md">
                    Collection 01
                </Heading>
                <InputGroup size="sm">
                    <Input
                        type="text"
                        variant="outline"
                        placeholder="search"
                        outline="1px solid"
                        outlineColor="gray.400"
                        bg="gray.50"
                    />
                    <InputLeftElement>
                        <Icon as={BsSearch} />
                    </InputLeftElement>
                </InputGroup>
            </VStack>
            <VStack w="full" spacing={0}>
                <Card />
                <Card />
                <Card />
            </VStack>
        </VStack>
    );
};

export default SnippetsBar;
