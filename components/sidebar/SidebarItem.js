import { Flex, Icon, Text, Spacer } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { BiChevronUp } from 'react-icons/bi';

const SidebarItem = ({ icon, text, count, isTitle, active }) => {
    return (
        <Flex
            color={isTitle && 'gray.400'}
            dir="row"
            align="center"
            gap={4}
            fontSize="md"
            // py={2}
            py={isTitle ? 0 : 2}
            px={8}
            w="full"
            cursor="pointer"
            userSelect="none"
            _hover={
                !isTitle && {
                    color: 'cyan.300',
                    // bg: 'green',
                }
            }
            _active={
                !isTitle && {
                    bg: 'whiteAlpha.200',
                }
            }
        >
            {icon && <Icon as={icon} />}
            <Text as="span">{text}</Text>
            {isTitle && <Icon as={active ? BiChevronUp : BiChevronDown} />}
            <Spacer />
            <Text as="span" opacity={0.2}>
                {count}
            </Text>
        </Flex>
    );
};

export default SidebarItem;

SidebarItem.defaultProps = {
    icon: null,
    text: '',
    count: null,
    isTitle: false,
    active: false,
};
