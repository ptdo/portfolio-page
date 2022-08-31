import { 
    Flex, 
    Heading, 
    Divider,
    IconButton,
    ButtonGroup,
    Text
} from "@chakra-ui/react"
import {  
    SiJavascript, 
    SiTypescript,
    SiApollographql,
    SiPostgresql,
    SiMysql,
    SiCsharp,
    SiHtml5,
    SiSequelize,
    SiGraphql,
    SiCss3
} from 'react-icons/si'

import {
    FaPython,
    FaGitAlt,
    FaAws,
    FaReact,
    Fa
} from 'react-icons/fa'

export default function Skills() {
    return (
        <>
            <Flex
                padding="0 20% 0 20%"
                w="100%"
            >
                <Heading>Skills</Heading>
            </Flex>

            <ButtonGroup
                padding='2rem 20% 5rem 20%'
                display='flex'
                spacing={3}
                flexWrap='wrap'
            >
                <Flex display='block' textAlign={'center'}>
                    <IconButton
                        as="a"
                        href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                        aria-label="python"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<FaPython   />}
                    />
                    <Text fontSize='xl'>Python</Text>
                </Flex>

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a"
                        href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
                        aria-label="csharp"
                        size='xl'
                        fontSize='80'
                        variant='ghost' 
                        icon={<SiCsharp  />}
                        
                    />
                    <Text fontSize='xl'>C#</Text>
                </Flex>
                
                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="https://en.wikipedia.org/wiki/JavaScript" 
                        aria-label="js"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiJavascript  />} 
                    />
                    <Text fontSize='xl'>JavaScript</Text>
                </Flex>
                
                <Flex display='block' textAlign={'center'}>
                    <IconButton
                        as="a"
                        href="https://en.wikipedia.org/wiki/TypeScript"
                        aria-label="ts"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiTypescript   />}
                    />
                    <Text fontSize='xl'>TypeScript</Text>
                </Flex>

                
                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a"
                        href="https://en.wikipedia.org/wiki/PostgreSQL"
                        aria-label="postgre"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiPostgresql   />}
                    />
                    <Text fontSize='xl'>PostgreSQL</Text>
                </Flex>

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="#" 
                        aria-label="git"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<FaGitAlt   />} 
                    />
                    <Text fontSize='xl'>Git</Text>
                </Flex>
                
                <Flex display='block' textAlign={'center'}>
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="https://en.wikipedia.org/wiki/MySQL"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiMysql   />}
                    />
                    <Text fontSize='xl'>MySQL</Text>
                </Flex>
            

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a"
                        href="https://en.wikipedia.org/wiki/HTML"
                        aria-label="html"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiHtml5  />}
                    />
                    <Text fontSize='xl'>HTML5</Text>
                </Flex>

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a"
                        href="https://en.wikipedia.org/wiki/CSS"
                        aria-label="html"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiCss3  />}
                    />
                    <Text fontSize='xl'>CSS</Text>
                </Flex>
                
                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="https://en.wikipedia.org/wiki/GraphQL" 
                        aria-label="graphql"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiGraphql  />} 
                    />
                    <Text fontSize='xl'>GraphQL</Text>
                </Flex>
                
                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="https://en.wikipedia.org/wiki/Amazon_Web_Services" 
                        aria-label="aws"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<FaAws  />} 
                    />
                    <Text fontSize='xl'>AWS</Text>
                </Flex>
                

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" 
                        aria-label="react"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<FaReact  />} 
                    />
                    <Text fontSize='xl'>React</Text>
                </Flex>

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="https://sequelize.org/" 
                        aria-label="sqlize"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiSequelize  />} 
                    />
                    <Text fontSize='xl'>Sequelize</Text>
                </Flex>

                <Flex display='block' textAlign={'center'}>
                    <IconButton 
                        as="a" 
                        href="https://www.apollographql.com/docs/react/" 
                        aria-label="apollo"
                        size='xl'
                        fontSize='80'
                        variant='ghost'
                        icon={<SiApollographql  />} 
                    />
                    <Text fontSize='xl'>Apollo</Text>
                </Flex>

            </ButtonGroup>
        </>
    )
}