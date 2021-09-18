import { Box, Heading, Stack, Text } from '@chakra-ui/layout'

import IconBrandRecognition from '../assets/icons/IconBrandRecognition'
import IconDetailedRecords from '../assets/icons/IconDetailedRecords'
import IconFullyCustomizable from '../assets/icons/IconFullyCustomizable'

import Service from './Service'

const Services = () => {
  return (
    <Box bg="secondary.lightgray" py="20" px="6">
      <Box textAlign="center">
        <Heading as="h2" variant="h2" mb="4">
          Advanced Statistics
        </Heading>
        <Text textStyle="medium" mb="20">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
        <Box pos="relative">
          <Stack spacing="24" zIndex="overlay" pos="relative" align="center">
            <Service
              icon={
                <IconBrandRecognition color="primary.teal" boxSize="35px" />
              }
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <Service
              icon={<IconDetailedRecords color="primary.teal" boxSize="35px" />}
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Service
              icon={
                <IconFullyCustomizable color="primary.teal" boxSize="35px" />
              }
              title="Fully Customizable"
              text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </Stack>
          <Box
            w="8px"
            h="full"
            pos="absolute"
            top="0"
            bg="primary.teal"
            left="50%"
            transform="translate(-50%,0)"
            zIndex="base"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Services
