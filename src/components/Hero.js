import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'

import IllustrationWork from '../assets/illustrations/illustration-working.svg'

const Hero = () => {
  return (
    <Box w="full">
      <Flex
        direction={{ base: 'column', md: 'row-reverse' }}
        align="center"
        bg="yellow.100"
        w="full"
        mx="auto"
        maxW="1110px"
      >
        <Box overflow="hidden" w="full" bg="red.100">
          <Box pos="relative" right="-30px" w="120%">
            <NextImage src={IllustrationWork} layout="responsive" />
          </Box>
        </Box>

        <Box
          maxW="565px"
          my={{ base: '30px', md: 0, xl: '100px' }}
          bg="blue.100"
          px="6"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h1" variant="h1" mb="2">
            More than just shorter links
          </Heading>
          <Text textStyle="big" mb="10">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Text>
          <Link href="#" variant="primary" display="inline-block" size="md">
            Get Started
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
