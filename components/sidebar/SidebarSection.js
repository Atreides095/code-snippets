import {
    Box,
    Flex,
    Icon,
    VStack,
    Spacer,
    Collapse,
    useDisclosure,
    calc,
} from '@chakra-ui/react';
import SidebarItem from './SidebarItem';

const SidebarSection = ({ children, sectionIcon, sectionTitle }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box w="full">
            <Box
                onClick={(e) => {
                    console.log(isOpen);
                    onToggle();
                }}
            >
                <SidebarItem
                    icon={sectionIcon}
                    text={sectionTitle}
                    active={isOpen}
                    isTitle
                />
            </Box>
            <Collapse in={isOpen} animateOpacity>
                <VStack
                    spacing={0}
                    paddingInlineStart="calc(0.875rem + 0.5rem)"
                >
                    {children}
                </VStack>
            </Collapse>
        </Box>
    );
};

export default SidebarSection;
