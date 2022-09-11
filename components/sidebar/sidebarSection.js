import {
    Box,
    Flex,
    Icon,
    VStack,
    Spacer,
    Collapse,
    useDisclosure,
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
                <VStack spacing={0} marginInlineStart="calc(2rem)">
                    {children}
                </VStack>
            </Collapse>
        </Box>
    );
};

export default SidebarSection;
