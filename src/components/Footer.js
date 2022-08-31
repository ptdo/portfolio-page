import {
    ButtonGroup,
    IconButton,
    Stack,
    Text,
    Flex
  } from '@chakra-ui/react'
import { 
    FaGithub, 
    FaLinkedin, 
    FaInstagram, 
    FaHandHoldingHeart
} from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <Flex>
                <Stack
                    paddingLeft='18%'
                    pt="8"
                    pb="12"
                    justify="space-between"
                    direction={{ base: 'column-reverse', md: 'row' }}
                >
                    <Text fontSize="md" color="subtle" paddingRight='2rem' display='flex'>
                        &copy; {new Date().getFullYear()} Made by RD with <FaHandHoldingHeart fontSize="1.5rem"/>
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