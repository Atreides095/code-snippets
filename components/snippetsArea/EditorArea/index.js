import {
    Box,
    Flex,
    Heading,
    HStack,
    IconButton,
    Text,
    VStack,
} from '@chakra-ui/react';
import { AiOutlineStar, AiFillEdit, AiFillDelete } from 'react-icons/ai';

const EditorArea = () => {
    return (
        <Box flexGrow={1} bg="gray.200" w="full">
            <VStack
                align="flex-start"
                // borderBlockEnd="2px solid"
                // borderBlockEndColor="gray.400"
                px={8}
                // h={24}
                pt={4}
            >
                <Flex dir="row" w="full">
                    <Heading
                        as="h3"
                        size="md"
                        flex={1}
                        textAlign="start"
                        display="flex"
                        alignItems="center"
                        noOfLines={2}
                    >
                        this is an example title for a snippet preview card this
                        is an example title for a snippet preview card
                    </Heading>
                    <HStack marginInlineStart={4} spacing={4}>
                        <Box
                            as="button"
                            color="gray.900"
                            fontSize="2xl"
                            size="sm"
                        >
                            <AiOutlineStar />
                        </Box>
                        <Box
                            as="button"
                            color="gray.900"
                            fontSize="2xl"
                            size="sm"
                        >
                            <AiFillEdit />
                        </Box>
                        <Box
                            as="button"
                            color="gray.900"
                            fontSize="2xl"
                            size="sm"
                        >
                            <AiFillDelete />
                        </Box>
                    </HStack>
                </Flex>
                <Text color="gray.600">
                    Last edit on <Text as="b">sept 11, 2022</Text>
                </Text>
            </VStack>
            <Box
                w="full"
                px={8}
                py={4}
                overflowY="scroll"
                h="calc(100vh - 6rem)"
            >
                <Box
                    h="20rem"
                    w="full"
                    bg="gray.50"
                    border="2px solid"
                    borderColor="gray.400"
                ></Box>
            </Box>
        </Box>
    );
};

export default EditorArea;
