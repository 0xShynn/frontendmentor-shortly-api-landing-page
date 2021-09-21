import { Box, Heading, Stack, Text } from '@chakra-ui/layout'

import IconBrandRecognition from '../assets/icons/IconBrandRecognition'
import IconDetailedRecords from '../assets/icons/IconDetailedRecords'
import IconFullyCustomizable from '../assets/icons/IconFullyCustomizable'

import Service from './Service'

const Services = () => {
  return (
    <Box
      bg="secondary.lightgray"
      pb={{ base: 20, lg: 32 }}
      px="6"
      role="region"
      aria-label="Services section"
    >
      <Box textAlign="center">
        <Box maxW="540px" mx="auto" mb={{ base: 20, lg: 28, xl: 32 }}>
          <Heading as="h3" variant="h2" mb="4">
            Advanced Statistics
          </Heading>
          <Text textStyle="medium">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Text>
        </Box>
        <Box pos="relative" maxW="1110px" mx="auto">
          <Stack
            spacing={{ base: 24, lg: 8 }}
            zIndex="overlay"
            pos="relative"
            align="center"
            justify="center"
            direction={{ base: 'column', lg: 'row' }}
          >
            <Service
              index={1}
              icon={
                <IconBrandRecognition color="primary.teal" boxSize="35px" />
              }
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <Service
              index={2}
              icon={<IconDetailedRecords color="primary.teal" boxSize="35px" />}
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Service
              index={3}
              icon={
                <IconFullyCustomizable color="primary.teal" boxSize="35px" />
              }
              title="Fully Customizable"
              text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </Stack>
          <Box
            w={{ base: '8px', lg: 'full' }}
            h={{ base: 'full', lg: '8px' }}
            pos="absolute"
            top={{ base: 0, lg: '50%' }}
            bg="primary.teal"
            left={{ base: '50%' }}
            transform="translate(-50%,0)"
            zIndex="base"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Services
