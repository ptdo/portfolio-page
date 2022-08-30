import { 
    Flex, 
    Heading, 
    Divider,
    IconButton,
    ButtonGroup
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
    SiGraphql
} from 'react-icons/si'

import {
    FaPython,
    FaGitAlt,
    FaAws,
    FaReact
} from 'react-icons/fa'


export default function Skills() {
    return (
        <>
            <Divider />
            <Flex
                padding="5rem 20% 0 20%"
                w="100%"
            >
                <Heading>Skills</Heading>
            </Flex>

            <Flex
                padding="2rem 20% 5rem 20%"
                w="80%"
                display="block"
            >
                <ButtonGroup paddingLeft='3%' w='80%'>
                        <IconButton
                            as="a"
                            href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                            aria-label="python"
                            size='xl'
                            icon={<FaPython fontSize="5rem" />}
                        />
                        <IconButton 
                            as="a"
                            href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
                            aria-label="csharp"
                            size='xl' 
                            icon={<SiCsharp fontSize="5rem" />}
                        />
                        <IconButton 
                            as="a" 
                            href="https://en.wikipedia.org/wiki/JavaScript" 
                            aria-label="js"
                            size='xl'
                            icon={<SiJavascript fontSize="5rem" />} 
                        />
                        

                        <IconButton
                            as="a"
                            href="https://en.wikipedia.org/wiki/TypeScript"
                            aria-label="ts"
                            size='xl'
                            icon={<SiTypescript fontSize="5rem" />}
                        />
                        <IconButton 
                            as="a"
                            href="https://en.wikipedia.org/wiki/PostgreSQL"
                            aria-label="postgre"
                            size='xl'
                            icon={<SiPostgresql fontSize="5rem" />}
                        />
                        <IconButton 
                            as="a" 
                            href="#" 
                            aria-label="git"
                            size='xl'
                            icon={<FaGitAlt fontSize="5rem" />} 
                        />
                    

                        <IconButton
                            as="a"
                            href="#"
                            aria-label="https://en.wikipedia.org/wiki/MySQL"
                            size='xl'
                            icon={<SiMysql fontSize="5rem" />}
                        />
                        <IconButton 
                            as="a"
                            href="https://en.wikipedia.org/wiki/HTML"
                            aria-label="html"
                            size='xl' 
                            icon={<SiHtml5 fontSize="5rem" />}
                        />
                        <IconButton 
                            as="a" 
                            href="https://en.wikipedia.org/wiki/GraphQL" 
                            aria-label="graphql"
                            size='xl'
                            icon={<SiGraphql fontSize='5rem' />} 
                        />

                        <IconButton 
                            as="a" 
                            href="https://en.wikipedia.org/wiki/Amazon_Web_Services" 
                            aria-label="aws"
                            size='xl'
                            icon={<FaAws fontSize='5rem'/>} 
                        />

                        <IconButton 
                            as="a" 
                            href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" 
                            aria-label="react"
                            size='xl'
                            icon={<FaReact fontSize='5rem'/>} 
                        />

                        <IconButton 
                            as="a" 
                            href="https://sequelize.org/" 
                            aria-label="sqlize"
                            size='xl'
                            icon={<SiSequelize fontSize='5rem'/>} 
                        />

                        <IconButton 
                            as="a" 
                            href="https://sequelize.org/" 
                            aria-label="sqlize"
                            size='xl'
                            icon={<SiApollographql fontSize='5rem'/>} 
                        />

                </ButtonGroup>

            </Flex>
        </>
    )
}