import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react"

export default function About(){
    return (
        <>
            <Flex
                padding="5rem 20% 0 20%"
                w="100%"
            >
                <Flex
                    alignSelf="center"
                    display="flex"
                    justifyContent="flex-start"
                >

                    <Box 
                        boxSize="3xs"
                    >
                        <Image 
                            src="./images/avatar.png" 
                            alt="RD"
                            borderRadius="full"
                        />
                    </Box>
                    <Heading
                        padding="3rem"
                    >
                        HIIIII!!! I'M RACHEL
                    </Heading>
                    
                </Flex>
                
            </Flex>
            <Flex
                padding="0 20% 8rem 20%"
                alignSelf="center"
                w="100%"
            >
                <Text fontSize="2xl" padding='0 10% 0 17%'>
                I am an aspiring software engineer based in Vancouver, Canada, and currently working at Realtor.com.
                I studied Mathematics and Computer Science at Simon Fraser University. I make things with code and have fun while doing it.
                </Text>
            </Flex>
        </>
    )
}