import { Tag, Box, Flex, HStack, Text, Badge, Heading } from '@chakra-ui/react';
const Card = ({ collection, title, tags }) => {
    return (
        <Flex
            direction="column"
            w="full"
            borderBlockEnd="1px solid"
            borderBlockEndColor="gray.400"
            p={2}
            cursor="pointer"
            bg="gray.50"
            _hover={{
                bg: 'gray.200',
            }}
        >
            <Text fontSize="xs" color="gray.500">
                {collection}
            </Text>
            <Heading as="h3" lineHeight="shorter" fontSize="md" noOfLines={2}>
                {title}
            </Heading>
            <HStack mt={4}>
                {tags.slice(0, 3).map((tag) => (
                    <Tag
                        // variant="solid"
                        borderInlineStart="3px solid"
                        borderInlineStartColor="teal.500"
                        size="sm"
                        colorScheme="teal"
                        key={tag.id}
                        rounded="none"
                        paddingInline={2}
                    >
                        {tag.tag}
                    </Tag>
                ))}
            </HStack>
        </Flex>
    );
};

export default Card;

Card.defaultProps = {
    collection: 'undefined',
    title: 'this is an example title for a snippet preview card',
    tags: [
        { tag: 'tag 1', id: 0 },
        { tag: 'tag 2', id: 1 },
        { tag: 'tag 3', id: 2 },
        { tag: 'tag 4', id: 3 },
    ],
};
