import {
    FormLabel,
    Input,
    Flex,
    Button,
    Heading,
    Textarea,
    Divider,
    useToast,
    FormControl,
  } from "@chakra-ui/react"
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { GrSend } from 'react-icons/gr'


export default function Contact(){
    const toast = useToast()
    const form = useRef()

    
    const handleSend = (e) => {
        e.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, 
            form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            return toast({
                title: 'Message sent sucessfully!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }, (error) => {
            console.log(error.text);
            return toast({
                title: 'Error: Message was not sent successfully',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        });
    }
    
    return (
        <>
            <Divider />
            <Flex padding="5rem 25% 5rem 19%" alignSelf="center" display='block'>
                <Flex paddingBottom='2rem'>
                    <Heading>Contact Me</Heading>
                </Flex>

                <form
                    ref={form}
                    onSubmit={handleSend}
                >
                    <FormControl isRequired mb="2">
                        <FormLabel margin="1% 0 0 2%" fontSize='xl'>Full Name</FormLabel>
                        <Input  
                            margin="1% 0 0 2%"
                            name='from_name' 
                            placeholder="Enter your name"
                            borderColor='ActiveBorder'
                        />
                    </FormControl>
                    

                    <FormControl isRequired>
                        <FormLabel margin="1% 0 0 2%" fontSize='xl'>Email Address</FormLabel>
                        <Input  
                            margin="1% 0 0 2%" 
                            name='user_email' 
                            placeholder="Enter your email"
                            borderColor='ActiveBorder'
                        />
                    </FormControl>
                    
                    <FormControl isRequired>
                        <FormLabel margin="1% 0 0 2%" fontSize='xl'>Message</FormLabel>
                        <Textarea  
                            margin="1% 0 0 2%" 
                            name='message' 
                            placeholder="Enter your message"
                            borderColor='ActiveBorder'
                        />
                    </FormControl>

                    <Button
                        marginTop='2rem'
                        marginLeft='85%'
                        colorScheme='teal'
                        type='submit'
                        rightIcon={<GrSend />}
                    >
                        Send
                    </Button>
                </form>

                
            </Flex>
        </>
    )
}