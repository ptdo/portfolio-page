import {
    ButtonGroup,
    Divider,
    IconButton,
    Stack,
    Text,
    Flex
  } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <Divider />
            <Flex paddingTop='2rem'>
                <Stack
                    paddingLeft='15%'
                    pt="8"
                    pb="12"
                    justify="space-between"
                    direction={{ base: 'column-reverse', md: 'row' }}
                >
                    <Text fontSize="md" color="subtle" paddingRight='2rem'>
                        &copy; {new Date().getFullYear()} RD. All rights reserved.
                    </Text>
                    <ButtonGroup variant="ghost">
                        <IconButton
                            as="a"
                            href="www.linkedin.com/in/rachel-pdo"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="2.25rem" />}
                        />
                        <IconButton 
                            as="a" 
                            href="https://github.com/ptdo"
                            aria-label="GitHub" 
                            icon={<FaGithub fontSize="2.25rem" />}
                        />
                        <IconButton 
                            as="a" 
                            href="https://www.instagram.com/thaod.p/" 
                            aria-label="Instagram" 
                            icon={<FaInstagram fontSize="2.25rem" />} 
                        />
                    </ButtonGroup>
                </Stack>
            </Flex>
        </>
    )
}