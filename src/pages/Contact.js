import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Button,
    Heading,
    Textarea,
    Divider
  } from "@chakra-ui/react"
import { useRef } from "react"

export default function Contact(){

    const form = useRef()

    const handleSend = (e) => {
        e.preventDefault()
        console.log("SUBMIT")
    }
    
    return (
        <>
            <Divider />
            <Flex padding="5rem 18% 5rem 15%" alignSelf="center">
                <Flex w="30%" marginRight="3%">
                    <Heading>Contact Me</Heading>
                </Flex>
                <FormControl
                    borderWidth="5px"
                    borderRadius="2xl"
                    textAlign="center"
                    w="60%"
                    ref={form}
                    onSubmit={handleSend}
                    display='block'
                >
                    <FormLabel margin="2% 0 0 2%">Full Name</FormLabel>
                    <Input w="75%" margin="2%" name='from_name' placeholder="Enter your name"/>
                    <FormLabel margin="2% 0 0 2%">Email Address</FormLabel>
                    <Input w="75%" margin="2%" name='user_email' />
                    <FormLabel margin="2% 0 0 2%">Message</FormLabel>
                    <Textarea w="75%" margin="2%" name='message' />
                    <Input colorScheme="green" type='submit'/>
                </FormControl>
            </Flex>
        </>
    )
}