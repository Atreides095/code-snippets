import { Box, Heading, VStack } from '@chakra-ui/react';

const EditorArea = () => {
    return (
        <Box flexGrow={1} bg="gray.200" h="100vh" w="full">
            <VStack
                align="flex-start"
                borderBlockEnd="2px solid"
                borderBlockEndColor="gray.400"
                px={8}
                h={24}
            >
                <Heading as="h3" size="md" mt={4}>
                    this is an example title for a snippet preview card
                </Heading>
            </VStack>
        </Box>
    );
};

export default EditorArea;
