import { 
    Flex, 
    Heading, 
    Text, 
    Box, 
    Image,
    Divider,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"

export default function Experience(){
    return (
        <>
            <Divider />
            <Flex padding="5rem 0 0 20%">
                <Heading>Experience</Heading>
            </Flex>
            <Flex
                padding="5rem 18% 5% 22%"
                w="100%"
                display="block"
            >
                <Flex display="flex">
                    <Box boxSize="15%">
                        <Image
                            src='https://play-lh.googleusercontent.com/jrb0x4JNkkd5Of7sG_qVbbv27rbBIGYay1MU1fLA-40SrowGqdFsYVYYWezQw1nCesw'
                            alt="Realtor.com"
                            href='https://www.realtor.com/'
                        />
                    </Box>

                    <Flex padding="0 15% 5% 10%" display="block">
                        <Text fontSize="2xl" fontWeight='bold'>Software Engineer, Contractor @ Realtor.com</Text>
                        <Text fontSize="md" fontStyle="italic">June 2021 - October 2022</Text>
                        <UnorderedList fontSize="xl" padding="1rem 0 0 0">
                            <ListItem>Implemented internal tooling to deploy image tagging machine learning model using NodeJS and GraphQL
                            resolvers for new fields accordingly.</ListItem>
                            <ListItem>Developed new endpoints for 3-D and virtual listing tours using Flask framework.</ListItem>
                            <ListItem>Wrote SQL scripts to update the data pipeline that generates upstream data for AWS Athena tables
                            to assist in monitoring data produced from image tagging services.</ListItem>
                            <ListItem>Leveraged AWS Athena and QuickSight dashboard to visualize data pertaining to image tags.</ListItem>
                            <ListItem>Optimized perceptual hash performance for fraud detection services using Python.</ListItem>
                        </UnorderedList>
                    </Flex>
                </Flex>

                <Flex display="flex">
                    <Box boxSize="13%">
                        <Image
                            src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/fzkpr2f685mr4jow2jf0'
                            alt="Canalyst by Tegus"
                        />
                        <Image
                            boxSize="100%"
                            paddingBlockStart="1rem"
                            src='https://media.glassdoor.com/sqll/3210351/tegus-squareLogo-1639086010106.png'
                            alt='Tegus'
                        />
                    </Box>

                    <Flex padding="0 15% 5% 10%" display="block">
                        <Text fontSize="2xl" fontWeight='bold'>Software Engineer, Intern @ Canalyst (by Tegus)</Text>
                        <Text fontSize="md" fontStyle="italic">January - August 2020</Text>
                        <UnorderedList fontSize="xl" padding="1rem 0 0 0">
                            <ListItem>Developed new features of analytical tools on Microsoft .NET framework using C# and third-party libraries such as Interop and Aspose API).</ListItem>
                            <ListItem>Wrote unit tests using NUnit framework.</ListItem>
                            <ListItem>Supported clients with ongoing issues related to tools.</ListItem>
                        </UnorderedList>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}