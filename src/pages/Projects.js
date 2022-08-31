import { 
    SimpleGrid, 
    IconButton,
    Text,
    Heading,
    Flex,
    Divider
 } from "@chakra-ui/react";
 import { FaGithub} from 'react-icons/fa'
import { projects } from '../data/projects'

export default function Projects(){
    return (
        <>
            <Divider />
            <Flex padding="5rem 15% 0 20%">
                <Heading>Projects</Heading>
            </Flex>
            

            <SimpleGrid 
                columns={2} 
                spacing='3rem'
                padding="3rem 25% 5rem 21%"
            >
                {projects.map((project) => (
                    <Flex display='block' paddingLeft='2rem'>
                        <Flex>
                            <Text 
                                fontSize="2xl" 
                                fontWeight='bold'
                            >
                                {project.title}
                            </Text>
                            <IconButton
                                as="a" 
                                href={project.repo} 
                                icon={<FaGithub />}
                                variant='ghost'
                            />
                        </Flex>
                        <Text 
                            fontSize="xl"
                            fontStyle='italic'
                        >
                            {project.stacks.join(', ')}
                        </Text>
                        
                        <Text
                            fontSize="xl"
                            paddingRight='2rem 25% 0 20%'
                        >
                            {project.description}
                        </Text>
                    </Flex>
                ))}
            </SimpleGrid>
        </>
    )
}