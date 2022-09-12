import { HStack } from '@chakra-ui/react';
import EditorArea from './EditorArea';
import SnippetsBar from './snippetsBar';

const SnippetsArea = () => {
    return (
        <HStack
            as="main"
            color="gray.900"
            spacing={0}
            w="full"
            align="flex-start"
            h="100vh"
        >
            <SnippetsBar />
            <EditorArea />
        </HStack>
    );
};

export default SnippetsArea;
